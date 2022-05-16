import { mappedGenreNames } from "./mappedGenreNames";

export const movieDetails = (item) => ({
  id: item.id,
  title: item.title,
  qoute: item.tagline,
  overview: item.overview,
  posterPath: item.poster_path,
  release: parseInt(item.release_date),
  genres: mappedGenreNames(item.genres),
});
