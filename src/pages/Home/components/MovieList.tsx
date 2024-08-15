import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '../../../components/ui/table';
import MovieDetailDialog from '../../../components/common/MovieDetailDialog.tsx';
import MovieContext from '../../../context/movies';
import { useContext } from 'react';
import MovieImg from '../../../components/common/MovieImg.tsx';
import ReleaseDate from '../../Movies/components/ReleaseDate.tsx';
import Runtime from '../../Movies/components/Runtime.tsx';
import Rating from '../../Movies/components/Rating.tsx';
import { Info } from 'lucide-react';

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  return (
    <Table className="my-6">
      <TableBody>
        {movies.map((movie, index) => (
          <TableRow key={movie.id}>
            <TableCell className="font-medium w-[100px]">
              <MovieImg url={movie.posterUrl} className="w-[100px]" />
            </TableCell>
            <TableCell className="flex flex-col text-left">
              <div className="text-lg font-bold">
                {`${index + 1}. ${movie.title}`}
              </div>
              <div className="flex flex-row space-x-4 mt-0.5">
                <ReleaseDate releaseYear={movie.year} />
                <Runtime runtime={movie.runtime} />
                <Rating rating={movie.averageRating} />
              </div>
              <p className="mt-0.5">
                <span className="font-bold text-sm mr-2">Director</span>
                <span className="text-blue-500">{movie.director}</span>
              </p>
              <p className="mt-0.5">
                <span className="font-bold text-sm mr-2">Actors</span>
                <span className="text-blue-500">{movie.actors}</span>
              </p>
            </TableCell>
            <TableCell className="text-right w-[100px]">
              <MovieDetailDialog movie={movie}>
                <div className="group relative">
                  <Info className="text-blue-500 w-[24px] h-[24px] cursor-pointer" />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-600 rounded opacity-0 group-hover:opacity-100">
                    View Details
                  </span>
                </div>
              </MovieDetailDialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MovieList;
