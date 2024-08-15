import { Movie } from '../../types/movie.ts';
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
import { useContext } from 'react';
import MovieContext from '../../context/movies.ts';
import { Star } from 'lucide-react';

const RatingDialog = ({ movie }: { movie: Movie }) => {
  const { changeMoviesByMerging } = useContext(MovieContext);

  const handleScoreClick = (score: number) => {
    ratingMovie({ movieId: movie.id, score }).then((data) => {
      changeMoviesByMerging({ ...movie, averageRating: data.averageRating });
    });
  };

  // TODO: refactor to 5 stars: 2 scores map to 1 star
  const scoreList = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <Dialog>
      <DialogTrigger className="text-yellow-400">
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          <Star className="w-4 h-4" /> <span className="ml-1">Rate</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rate</DialogTitle>
          <DialogDescription>
            <DialogClose>
              {scoreList.map((score, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:text-accent-foreground px-4 py-2 mr-1 w-10 h-10 hover:bg-yellow-400"
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
