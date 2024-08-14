import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchMovies } from '../../api';
import MovieContext from '../../context/movies';
import Movies from './components/Movies';
import { Movie } from '../../types/movie';
import Navigates from '../Home/components/Navigates';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data.contents);
    });
  }, []);

  const handleSearchClick = () => {
    console.log('search value: ', searchValue);
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

  return (
    <div>
      <Navigates currentNav={location.pathname} />
      <MovieContext.Provider value={{ movies, changeMovies }}>
        <SearchBar
          value={searchValue}
          onValueChange={handleSearchValueChange}
          onSearchClick={handleSearchClick}
        />
        <Movies />
      </MovieContext.Provider>
    </div>
  );
}
