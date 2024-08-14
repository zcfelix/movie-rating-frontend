export interface Movie {
  id: number;
  title: string;
  runtime: number;
  posterUrl: string;
  plot: string;
  director: string;
  actors: string;
  averageRating: string;
}

export interface FetchMoviesPayload {
  searchCriteria: string;
  pageNumber: number;
  pageSize: number;
}

export interface RatingMoviePayload {
  movieId: number;
  score: number;
}
