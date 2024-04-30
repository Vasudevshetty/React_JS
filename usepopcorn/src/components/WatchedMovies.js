import Box from "./Box";
import { Stats } from "./List";
import { average } from "./Main";

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
