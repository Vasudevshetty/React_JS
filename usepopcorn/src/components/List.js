import { getJSON, selectURL } from "../data";
import Loader from "./Loader";

export default function List({
  type,
  movies,
  onSelect,
  className,
  loaded,
  onLoading,
}) {
  return !loaded ? (
    <ul className={`list ${className}`}>
      {movies?.map((movie) => (
        <Movie
          type={type}
          movie={movie}
          key={movie.imdbID}
          onSelect={onSelect}
          onLoading={onLoading}
        ></Movie>
      ))}
    </ul>
  ) : (
    <Loader />
  );
}

function Movie({ type, movie, onSelect, onLoading }) {
  async function handleSelect() {
    try {
      onLoading(true);
      const data = await getJSON(selectURL(movie.imdbID));
      if (!data) return;
      onLoading(false);
      onSelect((selectedMovie) =>
        selectedMovie?.imdbID === data.imdbID ? null : data
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <li onClick={() => handleSelect()}>
      <img src={movie.Poster} alt={movie.Title + "poster"} />
      <h3>{movie.Title}</h3>

      <div>
        {type === "queryMovies" ? (
          <p>
            <span>🗓️</span>
            <span>{movie.Year}</span>
          </p>
        ) : (
          <>
            <Stats
              imdb={movie.imdbRating}
              user={movie.userRating}
              runtime={movie.runtime}
            />
            <button className="btn-delete">&times;</button>
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
        <span>{runtime} min</span>
      </p>
    </>
  );
}
