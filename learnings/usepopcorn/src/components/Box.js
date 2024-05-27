import ToggleButton from "./ToggleButton";
import MoviesList from "./MoviesList";
import { useState } from "react";
import { Error } from "./Loader";

export default function Box({
  type = "",
  movies = null,
  onSelect,
  onLoading,
  loaded,
  onDelete,
  className,
  children,
  onError,
  error,
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="box">
      <ToggleButton open={open} onOpen={setOpen}></ToggleButton>
      {open && (
        <>
          {children}
          {!error ? (
            (movies || type === "watchedMovies") && (
              <MoviesList
                type={type}
                movies={movies}
                onSelect={onSelect}
                onLoading={onLoading}
                className={className}
                onDelete={onDelete}
                onError={onError}
                loaded={loaded}
              />
            )
          ) : (
            <Error message={error} />
          )}
        </>
      )}
    </div>
  );
}
