import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router';
import MovieContext from './context/movies.ts';
import { Movie } from './types/movie.ts';
import { useState } from 'react';

const router = createBrowserRouter(
  routes.map((route) => ({
    path: route.path,
    element: <route.element />,
  })),
);

function App() {
  const [currentPageMovies, setCurrentPageMovies] = useState<Movie[]>([]);

  const changeMoviesByMerging = (currentMovie: Movie) => {
    const currentMovies = currentPageMovies.map((movie: Movie) => {
      return movie.id === currentMovie.id ? currentMovie : movie;
    });
    setCurrentPageMovies(currentMovies);
  };

  return (
    <MovieContext.Provider
      value={{
        movies: currentPageMovies,
        setMovies: setCurrentPageMovies,
        changeMoviesByMerging: changeMoviesByMerging,
      }}
    >
      <RouterProvider router={router} />
    </MovieContext.Provider>
  );
}

export default App;
