import { Movie } from '../../../types/movie.ts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card.tsx';
import MovieImg from '../../../components/common/MovieImg.tsx';
import RatingDialog from '../../../components/common/RatingDialog.tsx';

interface MovieTileProps {
  movie: Movie;
  onRatingChange: (movieId: number, averageRating: string) => void;
}

const MovieTile = ({ movie, onRatingChange }: MovieTileProps) => {
  return (
    <Card className="relative w-[240px] h-[360px] m-2 cursor-pointer">
      <CardHeader>
        <MovieImg url={movie.posterUrl} className="w-full h-[150px]" />
      </CardHeader>
      <CardTitle className="text-lg font-bold pl-1 pr-1">
        {movie.title}
      </CardTitle>
      <CardContent>
        <p>Rate: {movie.averageRating}</p>
        <div className="absolute bottom-0 right-2">
          <RatingDialog movie={movie} onRatingChange={onRatingChange} />
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieTile;
