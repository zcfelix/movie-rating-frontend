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
import { Button } from '../ui/button.tsx';
import { Star } from 'lucide-react';
import { useContext } from 'react';
import MovieContext from '../../context/movies.ts';

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
        <Button variant="ghost">
          <Star className="w-4 h-4" /> <span className="ml-1">Rate</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rate</DialogTitle>
          <DialogDescription>
            <DialogClose>
              {scoreList.map((score, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="mr-1 w-10 h-10 hover:bg-yellow-400"
                  onClick={() => handleScoreClick(score)}
                >
                  {score}
                </Button>
              ))}
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default RatingDialog;
