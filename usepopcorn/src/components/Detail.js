import StarRating from "./StarRating";

export default function Detail({ movie, onBack }) {
  if (!movie) return;
  return (
    <div className="details">
      <Header movie={movie} onBack={onBack} />
      <Section movie={movie} />
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

function Section({ movie }) {
  return (
    <section>
      <div className="rating">
        <StarRating starsCount={10} size={24} />
      </div>
      <p>
        <em>{movie.Plot}</em>
      </p>
      <p>Starring {movie.Actors}</p>
      <p>Directed by {movie.Director}</p>
    </section>
  );
}
