import { useContext, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchMovies } from '../../api';
import MovieList from './components/MovieList.tsx';
import { FetchMoviesPayload } from '../../types/movie';
import Navigates from '../../components/common/Navigates.tsx';
import { useLocation } from 'react-router-dom';
import Loader from '../../components/common/Loader.tsx';
import MoviePagination from './components/MoviePagination.tsx';
import MovieContext from '../../context/movies.ts';

const PAGE_SIZE = 20;

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalSize, setTotalSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const { setMovies } = useContext(MovieContext);

  const totalPages = Math.ceil(totalSize / PAGE_SIZE);

  const getMovies = (payload: FetchMoviesPayload) => {
    setLoading(true);
    fetchMovies(payload).then((data) => {
      setMovies(data.contents);
      setTotalSize(data.totalSize);
      setLoading(false);
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
      pageNumber: 1,
      pageSize: PAGE_SIZE,
      searchCriteria: searchValue,
    });
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
      <SearchBar
        value={searchValue}
        onValueChange={handleSearchValueChange}
        onSearchClick={handleSearchClick}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieList />
          {totalPages > 1 && (
            <MoviePagination
              totalPages={Math.ceil(totalSize / PAGE_SIZE)}
              currentPage={pageNumber}
              onPageChange={handlePageNumberChange}
            />
          )}
        </>
      )}
    </div>
  );
}
