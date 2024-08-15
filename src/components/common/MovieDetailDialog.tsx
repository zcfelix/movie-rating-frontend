import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog.tsx';
import { Movie } from '../../types/movie.ts';
import MovieImg from './MovieImg.tsx';
import ReleaseDate from '../../pages/Movies/components/ReleaseDate.tsx';
import Runtime from '../../pages/Movies/components/Runtime.tsx';
import AverageRating from '../../pages/Movies/components/AverageRating.tsx';
import RatingDialog from './RatingDialog.tsx';

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
              <div className="text-lg font-bold">{movie.title}</div>
              <div className="flex flex-row space-x-4 mt-0.5">
                <ReleaseDate releaseYear={movie.year} />
                <Runtime runtime={movie.runtime} />
              </div>
              <div className="flex flex-row gap-4">
                <AverageRating rating={movie.averageRating} />
                <RatingDialog movie={movie} />
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <span className="font-bold text-black mr-1">Director</span>
            <span className="text-blue-500">{movie.director}</span>
          </DialogDescription>
          <DialogDescription>
            <span className="font-bold text-black mr-1">Actors</span>
            <span className="text-blue-500">{movie.actors}</span>
          </DialogDescription>
          <DialogDescription className="text-black">
            {movie.plot}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDetailDialog;
