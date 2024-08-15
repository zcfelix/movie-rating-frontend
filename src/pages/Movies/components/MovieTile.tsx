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
    <Card className="w-[200px] h-[300px] m-2 cursor-pointer">
      <CardHeader>
        <MovieImg url={movie.posterUrl} className="w-full h-[150px]" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-md font-bold">{movie.title}</CardTitle>
        <p>Rate: {movie.averageRating}</p>
        <RatingDialog movie={movie} onRatingChange={onRatingChange} />
      </CardContent>
    </Card>
  );
};

export default MovieTile;
