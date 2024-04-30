import Box from "./Box";
import { Stats } from "./List";
import Detail from "./Detail";

const average = (array) =>
  !array
    ? array.reduce((acc, curr) => (acc = acc + curr), 0) / array.length
    : 0;

export function Main({ children }) {
  return <main className="main">{children}</main>;
}
export function Movies({ movies, onSelect }) {
  return (
    <Box
      type="queryMovies"
      movies={movies}
      onSelect={onSelect}
      className="list-movies"
    />
  );
}
export function WatchedMovies({ watchedMovies }) {
  const imdbAvg = average(watchedMovies.map((movie) => movie.imdbRating));
  const userAvg = average(watchedMovies.map((movie) => movie.userRating));
  const runtimeAvg = average(watchedMovies.map((movie) => movie.runtime));

  return (
    <Box movies={watchedMovies}>
      <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watchedMovies.length} movies</span>
          </p>
          <Stats imdb={imdbAvg} user={userAvg} runtime={runtimeAvg} />
        </div>
      </div>
    </Box>
  );
}

export function Details({ movie, onBack }) {
  return (
    <Box>
      <Detail movie={movie} onBack={onBack} />
    </Box>
  );
}
