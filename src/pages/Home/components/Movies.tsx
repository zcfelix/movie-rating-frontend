import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../../components/ui/table';
import infoSvg from '@/assets/info.svg';
import MovieDetailDialog from './MovieDetailDialog';
import moviePlaceHolder from '@/assets/movie_placeholder.jpg';
import MovieContext from '../../../context/movies';
import { useContext } from 'react';

const Movies = () => {
  const { movies } = useContext(MovieContext);
  return (
    <Table className="my-6">
      <TableBody>
        {movies.map((movie) => (
          <TableRow key={movie.id}>
            <TableCell className="font-medium w-[100px]">
              <img
                src={movie.posterUrl}
                alt="Movie poster"
                className="w-[100px] h-[150px] object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = moviePlaceHolder;
                }}
              />
            </TableCell>
            <TableCell className="flex flex-col text-left">
              <div className="text-lg font-bold">{movie.title}</div>
              <div>{movie.averageRating}</div>
            </TableCell>
            <TableCell className="text-right w-[100px]">
              <MovieDetailDialog movie={movie}>
                <img
                  src={infoSvg}
                  alt="Info"
                  title="View Details"
                  className="w-[34px] h-[34px] cursor-pointer"
                />
              </MovieDetailDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Movies;
