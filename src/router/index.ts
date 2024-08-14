import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

export const paths = {
  home: '/',
  movieDetail: '/movies/:id',
};

export const routes = [
  {
    path: paths.home,
    element: Home,
  },
  {
    path: paths.movieDetail,
    element: MovieDetail,
  },
  {
    path: '*',
    element: Home,
  },
];
