import moviePlaceholder from '../../assets/movie_placeholder.jpg';

const MovieImg = ({
  url,
  className = '',
}: {
  url: string;
  className?: string;
}) => {
  return (
    <img
      src={url}
      alt="Movie poster"
      className={`object-cover ${className}`}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = moviePlaceholder;
      }}
    />
  );
};

export default MovieImg;
