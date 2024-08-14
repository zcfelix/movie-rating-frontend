import { Movie } from '../../types/movie.ts';
import MovieContext from '../../context/movies.ts';
import { useContext } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog.tsx';
import { ratingMovie } from '../../api';

const RatingDialog = ({ movie }: { movie: Movie }) => {
  const { changeMovies } = useContext(MovieContext);

  const handleScoreClick = (score: number) => {
    ratingMovie({ movieId: movie.id, score }).then((data) => {
      if (changeMovies) {
        changeMovies({
          ...movie,
          averageRating: data.averageRating,
        });
      }
    });
  };

  const scoreList = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Dialog>
      <DialogTrigger className="text-yellow-400">Rate</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rate</DialogTitle>
          <DialogDescription>
            <DialogClose>
              {scoreList.map((score) => (
                <div
                  className="ml-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  key={score}
                  onClick={() => handleScoreClick(score)}
                >
                  {score}
                </div>
              ))}
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RatingDialog;
