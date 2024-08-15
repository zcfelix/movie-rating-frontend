import { useContext, useEffect, useRef, useState } from 'react';
import { fetchMovies } from '../../api';
import Navigates from '../../components/common/Navigates.tsx';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/common/Loader.tsx';
import MovieContext from '../../context/movies.ts';
import { Movie } from '../../types/movie.ts';
import MovieTile from './components/MovieTile.tsx';

const PAGE_SIZE = 20;

enum LOAD_MODE {
  INIT,
  LOAD_MORE,
}

const Movies = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const location = useLocation();
  const { movies, setMovies } = useContext(MovieContext);
  const handleScrollRef = useRef<() => void>(() => {});

  const loadMoreMovies = (loadMode: LOAD_MODE = LOAD_MODE.LOAD_MORE) => {
    if (loading) return;
    setLoading(true);
    fetchMovies({
      pageNumber: pageNumber,
      pageSize: PAGE_SIZE,
      searchCriteria: '',
    }).then((data) => {
      setMovies((prevMovies) => {
        switch (loadMode) {
          case LOAD_MODE.INIT:
            return data.contents;
          case LOAD_MODE.LOAD_MORE:
            return [...prevMovies, ...data.contents];
        }
      });
      setPageNumber(pageNumber + 1);
      setTotalSize(data.totalSize);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadMoreMovies(LOAD_MODE.INIT);
    const handleScroll = () => handleScrollRef.current();
    window.addEventListener('scroll', handleScroll);

    return () => {
      setMovies([]);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  handleScrollRef.current = () => {
    if (
      !loading &&
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      movies.length < totalSize
    ) {
      loadMoreMovies();
    }
  };

  return (
    <div>
      <Navigates currentNav={location.pathname} />
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.map((movie: Movie) => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Movies;
