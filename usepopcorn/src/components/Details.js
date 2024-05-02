import { useState, useEffect, useRef } from "react";
import { Loader } from "./Loader";
import StarRating from "./StarRating";
import useKey from "./useKey";

export default function Details({
  movie,
  onBack,
  loaded,
  onWatched,
  watchedMovies,
  onListed,
}) {
  useKey("Escape", () => onBack(null));

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
  const stars = useRef(0);

  function handleWatched() {
    onWatched((watchedMovies) => [
      ...watchedMovies,
      { ...movie, starsDecision: stars.current, userRating: rating },
    ]);
    onListed(null);
  }
  useEffect(
    function () {
      document.title = `MOVIE | ${movie.Title} : ${rating}⭐`;
      if (rating) stars.current++;
      return function () {
        document.title = "usePopcorn";
      };
    },
    [movie, rating]
  );

  return (
    <section>
      <div className="rating" ref={stars}>
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
