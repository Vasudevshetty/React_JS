import { useState } from "react";
import { Loader } from "./Loader";
import StarRating from "./StarRating";

export default function Details({
  movie,
  onBack,
  loaded,
  onWatched,
  watchedMovies,
  onListed,
}) {
  return !loaded ? (
    <Detail
      movie={movie}
      onBack={onBack}
      onWatched={onWatched}
      onListed={onListed}
      watchedMovies={watchedMovies}
    />
  ) : (
    <Loader />
  );
}

function Detail({ movie, onBack, onWatched, onListed, watchedMovies }) {
  if (!movie) return;
  return (
    <div className="details">
      <Header movie={movie} onBack={onBack} />
      <Section
        movie={movie}
        onWatched={onWatched}
        onListed={onListed}
        watchedMovies={watchedMovies}
      />
    </div>
  );
}

function Header({ movie, onBack }) {
  return (
    <header>
      <button className="btn-back" onClick={() => onBack(null)}>
        &larr;
      </button>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <OverView movie={movie}></OverView>
    </header>
  );
}

function OverView({ movie }) {
  return (
    <div className="details-overview">
      <h2>{movie.Title}</h2>
      <p>
        {movie.Released}. {movie.Genre}
      </p>
      <p>
        <span>⭐</span>
        {movie.imdbRating} IMDb Rating
      </p>
    </div>
  );
}

function Section({ movie, onWatched, onListed, watchedMovies }) {
  const [rating, setRating] = useState(0);

  function handleWatched() {
    onWatched((watchedMovies) => [
      ...watchedMovies,
      { ...movie, userRating: rating },
    ]);
    onListed(null);
  }

  return (
    <section>
      <div className="rating">
        {!watchedMovies.map((movie) => movie.imdbID).includes(movie.imdbID) ? (
          <StarRating starsCount={10} size={24} onSetRating={setRating} />
        ) : (
          <p>
            You rated this movie with{" "}
            {
              watchedMovies.find(
                (watchedMovie) => watchedMovie.imdbID === movie.imdbID
              )?.userRating
            }
            ⭐
          </p>
        )}
        {rating > 0 && (
          <button className="btn-add" onClick={handleWatched}>
            + Add to list
          </button>
        )}
      </div>
      <p>
        <em>{movie.Plot}</em>
      </p>
      <p>Starring {movie.Actors}</p>
      <p>Directed by {movie.Director}</p>
    </section>
  );
}
