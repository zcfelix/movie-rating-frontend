import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { fetchMovies } from '../../api';
import Navigates from '../../components/common/Navigates.tsx';
import { useLocation } from 'react-router-dom';
import MovieTile from './components/MovieTile.tsx';
import Loader from '../../components/common/Loader.tsx';

const PAGE_SIZE = 20;

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const loadMoreMovies = () => {
    if (loading) return;
    setLoading(true);
    fetchMovies({
      pageNumber: pageNumber,
      pageSize: PAGE_SIZE,
      searchCriteria: '',
    }).then((data) => {
      setMovies((prevMovies) => [...prevMovies, ...data.contents]);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadMoreMovies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      )
        return;
      loadMoreMovies();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleRatingChange = (movieId: number, averageRating: string) => {
    const currentMovies = movies.map((movie: Movie) => {
      return movie.id === movieId ? { ...movie, averageRating } : movie;
    });
    setMovies(currentMovies);
  };

  return (
    <div>
      <Navigates currentNav={location.pathname} />
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.map((movie: Movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Movies;
