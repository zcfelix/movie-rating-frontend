import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../../components/ui/table';
import infoSvg from '@/assets/info.svg';
import MovieDetailDialog from '../../../components/common/MovieDetailDialog.tsx';
import MovieContext from '../../../context/movies';
import { useContext } from 'react';
import MovieImg from '../../../components/common/MovieImg.tsx';

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  return (
    <Table className="my-6">
      <TableBody>
        {movies.map((movie) => (
          <TableRow key={movie.id}>
            <TableCell className="font-medium w-[100px]">
              <MovieImg url={movie.posterUrl} className="w-[100px]" />
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

export default MovieList;
