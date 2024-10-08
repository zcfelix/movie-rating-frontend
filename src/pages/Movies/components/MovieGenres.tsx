const MovieGenres = ({ genres }: { genres: string[] }) => {
  return (
    <div className="flex-auto">
      {genres.map((genre, index) => (
        <span className="text-sm text-blue-400 mr-2 last:mr-0" key={index}>
          {genre}
        </span>
      ))}
    </div>
  );
};

export default MovieGenres;
