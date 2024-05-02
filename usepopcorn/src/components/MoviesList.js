import { getJSON, selectURL } from "../data";

export default function MoviesList({
  type,
  movies,
  onSelect,
  onReselect,
  onDelete,
  className,
  onLoading,
  loaded,
  onError,
}) {
  function handleDelete(movie) {
    onDelete((watchedMovies) =>
      watchedMovies.filter((watchedMovie) => watchedMovie !== movie)
    );
  }

  return (
    !loaded && (
      <ul className={`list ${className}`}>
        {movies?.map((movie) => (
          <Movie
            type={type}
            movie={movie}
            key={movie.imdbID}
            onSelect={onSelect}
            onReselect={onReselect}
            onLoading={onLoading}
            onDelete={handleDelete}
            onError={onError}
          />
        ))}
      </ul>
    )
  );
}

function Movie({ type, movie, onSelect, onLoading, onDelete, onError }) {
  async function handleSelect() {
    if (type !== "queryMovies") return;
    try {
      onLoading(true);
      onError("");
      const data = await getJSON(selectURL(movie.imdbID));
      if (!data) return;
      onLoading(false);
      onSelect((selectedMovie) =>
        selectedMovie?.imdbID === data.imdbID ? null : data
      );
    } catch (err) {
      onError(err.message);
    } finally {
      onLoading(false);
    }
  }

  return (
    <li onClick={() => handleSelect()}>
      <img src={movie.Poster} alt={movie.Title + "poster"} />
      <h3>{movie.Title}</h3>
      <div>
        {type === "queryMovies" && (
          <p>
            <span>🗓️</span>
            <span>{movie.Year}</span>
          </p>
        )}
        {type === "watchedMovies" && (
          <>
            <Stats
              imdb={movie.imdbRating}
              user={movie.userRating}
              runtime={movie.Runtime}
            />
            <button className="btn-delete" onClick={() => onDelete(movie)}>
              &times;
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export function Stats({ imdb, user, runtime }) {
  return (
    <>
      <p>
        <span>⭐</span>
        <span>{imdb}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{user}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{runtime}</span>
      </p>
    </>
  );
}
