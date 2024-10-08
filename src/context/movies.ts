import { createContext } from 'react';
import { Movie } from '../types/movie';

interface MovieContextProps {
  movies: Movie[];
  setMovies: (newMovies: Movie[] | ((prevState: Movie[]) => Movie[])) => void;
  changeMoviesByMerging: (updatedMovie: Movie) => void;
}

const MovieContext = createContext<MovieContextProps>({
  movies: [],
  setMovies: () => {},
  changeMoviesByMerging: () => {},
});

export default MovieContext;
