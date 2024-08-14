import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { fetchMovies } from '../../api';
import Navigates from '../../components/common/Navigates.tsx';
import { useLocation } from 'react-router-dom';
import MovieImg from '../../components/common/MovieImg.tsx';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies().then((data) => {
      setMovies(data.contents);
    });
  }, []);

  return (
    <div>
      <Navigates currentNav={location.pathname} />
      <div className="flex flex-wrap gap-6 justify-center">
        {movies.map((movie: Movie) => (
          <div
            key={movie.id}
            className="w-[200px] h-[150px] flex cursor-pointer bg-gray-300 rounded-md overflow-hidden"
          >
            <MovieImg url={movie.posterUrl} />
            <div className="flex-1">
              <h2 className="text-left pl-1 font-bold break-words break-all">
                {movie.title}
              </h2>
              <p className="text-left pl-1">Rate: {movie.averageRating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
