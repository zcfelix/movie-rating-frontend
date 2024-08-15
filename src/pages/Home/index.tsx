import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchMovies } from '../../api';
import MovieContext from '../../context/movies';
import MovieList from './components/MovieList.tsx';
import { FetchMoviesPayload, Movie } from '../../types/movie';
import Navigates from '../../components/common/Navigates.tsx';
import { useLocation } from 'react-router-dom';
import MoviePagination from './components/MoviePagination.tsx';

const PAGE_SIZE = 20;

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalSize, setTotalSize] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  const location = useLocation();

  const totalPages = Math.ceil(totalSize / PAGE_SIZE);

  const getMovies = (payload: FetchMoviesPayload) => {
    fetchMovies(payload).then((data) => {
      setMovies(data.contents);
      setTotalSize(data.totalSize);
    });
  };

  useEffect(() => {
    getMovies({
      pageNumber: pageNumber,
      pageSize: PAGE_SIZE,
      searchCriteria: searchValue,
    });
  }, []);

  const handleSearchClick = () => {
    getMovies({
      pageNumber: pageNumber,
      pageSize: PAGE_SIZE,
      searchCriteria: searchValue,
    });
  };

  const changeMovies = (currentMovie: Movie) => {
    const currentMovies = movies.map((movie: Movie) => {
      return movie.id === currentMovie.id ? currentMovie : movie;
    });
    setMovies(currentMovies);
  };

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePageNumberChange = (value: number) => {
    setPageNumber(value);
    getMovies({
      pageNumber: value,
      pageSize: PAGE_SIZE,
      searchCriteria: searchValue,
    });
  };

  return (
    <div>
      <Navigates currentNav={location.pathname} />
      <MovieContext.Provider value={{ movies, changeMovies }}>
        <SearchBar
          value={searchValue}
          onValueChange={handleSearchValueChange}
          onSearchClick={handleSearchClick}
        />
        <MovieList />
        {totalPages > 1 && (
          <MoviePagination
            pageNumber={pageNumber}
            totalPages={totalPages}
            onPageNumberChange={handlePageNumberChange}
          />
        )}
      </MovieContext.Provider>
    </div>
  );
}
