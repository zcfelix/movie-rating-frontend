import Home from '../pages/Home';
import Movies from '../pages/Movies';

export const paths = {
  home: '/',
  movies: '/movies',
  movieDetail: '/movies/:id',
};

export const routes = [
  {
    path: paths.home,
    element: Home,
  },
  {
    path: paths.movies,
    element: Movies,
  },
  {
    path: '*',
    element: Home,
  },
];
