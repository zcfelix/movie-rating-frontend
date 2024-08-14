import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog.tsx';
import { Movie } from '../../types/movie.ts';
import RatingDialog from './RatingDialog.tsx';
import MovieImg from './MovieImg.tsx';

const MovieDetailDialog = ({
  children,
  movie,
}: {
  children: React.ReactNode;
  movie: Movie;
}) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-4">
            <MovieImg url={movie.posterUrl} className="w-[80px] h-[120px]" />
            <div>
              <div>{movie.title}</div>
              <div className="flex">
                <div className="m-1">{movie.averageRating}</div>
                <RatingDialog movie={movie} />
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <span className="font-bold">Director: </span>
            <span className="text-blue-500">{movie.director}</span>
          </DialogDescription>
          <DialogDescription>
            <span className="font-bold">Actors: </span>
            <span className="text-blue-500">{movie.actors}</span>
          </DialogDescription>
          <DialogDescription>{movie.plot}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailDialog;
