import { Movie } from '../../../types/movie.ts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card.tsx';
import RatingDialog from '../../../components/common/RatingDialog.tsx';
import MovieGenres from './MovieGenres.tsx';
import ReleaseDate from './ReleaseDate.tsx';
import Runtime from './Runtime.tsx';
import AverageRating from './AverageRating.tsx';
import MoviePoster from './MoviePoster.tsx';

const MovieTile = ({ movie }: { movie: Movie }) => {
  return (
    <Card className="relative w-[240px] h-[360px] m-2">
      <CardHeader>
        <MoviePoster url={movie.posterUrl} />
      </CardHeader>
      <CardTitle className="text-xl font-bold pl-1 pr-1">
        {movie.title}
      </CardTitle>
      <CardContent>
        <MovieGenres genres={movie.genres} />
        <div className="flex justify-center space-x-2">
          <ReleaseDate releaseYear={movie.year} />
          <Runtime runtime={movie.runtime} />
        </div>
        <AverageRating rating={movie.averageRating} />
        <div className="absolute bottom-2 right-2">
          <RatingDialog movie={movie} />
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieTile;
