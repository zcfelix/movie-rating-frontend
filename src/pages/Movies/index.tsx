import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { fetchMovies } from '../../api';
import Navigates from '../../components/common/Navigates.tsx';
import { useLocation } from 'react-router-dom';
import MovieTile from './components/MovieTile.tsx';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies({
      pageNumber: 1,
      pageSize: 200,
      searchCriteria: '',
    }).then((data) => {
      setMovies(data.contents);
    });
  }, []);

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
    </div>
  );
};

export default Movies;
