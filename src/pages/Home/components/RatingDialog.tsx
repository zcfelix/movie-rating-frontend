import { Movie } from '../../../types/movie.ts';
import MovieContext from '../../../context/movies.ts';
import { useContext } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../components/ui/dialog.tsx';

const RatingDialog = ({ movie }: { movie: Movie }) => {
  const { changeMovies } = useContext(MovieContext);

  const handleScoreClick = (score: number) => {
    if (changeMovies) {
      changeMovies({
        ...movie,
        averageRating: score.toString(), // TODO: change to real average rating from http response
      });
    }
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
