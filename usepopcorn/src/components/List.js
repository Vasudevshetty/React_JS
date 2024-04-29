export default function List({ type, movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie type={type} movie={movie} key={movie.imdbID}></Movie>
      ))}
    </ul>
  );
}

function Movie({ type, movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={movie.Title + "poster"} />
      <h3>{movie.Title}</h3>

      <div>
        {type === "queryMovies" ? (
          <p>
            <span>🗓️</span>
            <span>{movie.Year}</span>
          </p>
        ) : (
          <Stats
            imdb={movie.imdbRating}
            user={movie.userRating}
            runtime={movie.runtime}
          />
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
