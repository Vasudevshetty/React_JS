import Box from "./Box";
import { Stats } from "./List";

const average = (array) =>
  array.length ? (array.reduce((acc, curr) => (acc = acc + curr), 0) / array.length).toFixed(
    2
  ) : 0;

export function WatchedMovies({ watchedMovies, onDelete }) {
  return (
    <Box movies={watchedMovies} onDelete={onDelete}>
      <Summary watchedMovies={watchedMovies} />
    </Box>
  );
}

function Summary({ watchedMovies }) {
  const imdbAvg = average(
    watchedMovies.map((movie) => parseFloat(movie.imdbRating))
  );
  const userAvg = average(watchedMovies.map((movie) => movie.userRating));
  const runtimeAvg = average(
    watchedMovies.map((movie) => parseFloat(movie.Runtime.split(" ").at(0)))
  );

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watchedMovies.length} movies</span>
        </p>
        <Stats imdb={imdbAvg} user={userAvg} runtime={runtimeAvg + " min"} />
      </div>
    </div>
  );
}
