import { createContext } from 'react';
import { Movie } from '../types/movie';

interface MovieContextProps {
  movies: Movie[];
  changeMovies?: (movie: Movie) => void;
}

const MovieContext = createContext<MovieContextProps>({
  movies: [],
});
export default MovieContext;
