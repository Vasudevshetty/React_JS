import Box from "./Box";

export function Movies({ movies, onSelect, onLoading }) {
  return (
    <Box
      type="queryMovies"
      movies={movies}
      onSelect={onSelect}
      className="list-movies"
      onLoading={onLoading}
    />
  );
}
