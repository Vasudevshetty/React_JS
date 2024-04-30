import { useState } from "react";
import Box from "./Box";
import Loader from "./Loader";
import StarRating from "./StarRating";

export default function Details({
  movie,
  onBack,
  loaded,
  onWatched,
  onListed,
}) {
  return (
    <Box>
      {!loaded ? (
        <Detail
          movie={movie}
          onBack={onBack}
          onWatched={onWatched}
          onListed={onListed}
        />
      ) : (
        <Loader />
      )}
    </Box>
  );
}

function Detail({ movie, onBack, onWatched, onListed }) {
  if (!movie) return;
  return (
    <div className="details">
      <Header movie={movie} onBack={onBack} />
      <Section movie={movie} onWatched={onWatched} onListed={onListed} />
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

function Section({ movie, onWatched, onListed }) {
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
        <StarRating starsCount={10} size={24} onSetRating={setRating} />
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
