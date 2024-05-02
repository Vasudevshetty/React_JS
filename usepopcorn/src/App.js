import "./index.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Main } from "./components/Main";
import Details from "./components/Details";
import { WatchedMovies } from "./components/WatchedMovies";
import Box from "./components/Box";
import { Movies } from "./components/Movies";
import { Error } from "./components/Loader";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchLoaded, setSearchLoaded] = useState(false);
  const [detailLoaded, setDetailLoaded] = useState(false);
  const [error, setError] = useState("");
  const [watchedMovies, setWatchedMovies] = useLocalStorage();

  return (
    <>
      <NavBar
        numResults={movies?.length}
        onQuery={setMovies}
        onLoading={setSearchLoaded}
        onError={setError}
        onNewQuery={setSelectedMovie}
      ></NavBar>
      <Main>
        <Box
          type="queryMovies"
          movies={movies}
          className="list-movies"
          onSelect={setSelectedMovie}
          loaded={searchLoaded}
          onLoading={setDetailLoaded}
          onError={setError}
          error={error}
        >
          <Movies movies={movies} loaded={searchLoaded} />
        </Box>
        {!detailLoaded && !selectedMovie ? (
          <Box
            onDelete={setWatchedMovies}
            movies={watchedMovies}
            type="watchedMovies"
          >
            <WatchedMovies watchedMovies={watchedMovies} />
          </Box>
        ) : (
          <Box>
            {!error ? (
              <Details
                movie={selectedMovie}
                onBack={setSelectedMovie}
                loaded={detailLoaded}
                onWatched={setWatchedMovies}
                onListed={setSelectedMovie}
                watchedMovies={watchedMovies}
                error={error}
              />
            ) : (
              <Error message={error} />
            )}
          </Box>
        )}
      </Main>
    </>
  );
}

export default App;
