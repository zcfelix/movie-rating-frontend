import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchMovies } from '../../api';
import MovieContext from '../../context/movies';
import Movies from './components/Movies';
import { Movie } from '../../types/movie';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

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
      <h1 className="text-3xl font-bold underline">Home</h1>
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
