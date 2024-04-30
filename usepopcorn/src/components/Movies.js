import Box from "./Box";
import Loader from "./Loader";

export function Movies({ movies, onSelect, loaded, onLoading }) {
  return (
    <Box
      type="queryMovies"
      movies={movies}
      onSelect={onSelect}
      className="list-movies"
      onLoading={onLoading}
    >
      {loaded && !movies && <Loader />}
    </Box>
  );
}
