import "./index.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Main } from "./components/Main";
import { Details } from "./components/Details";
import { WatchedMovies } from "./components/WatchedMovies";
import { Movies } from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [searchLoaded, setSearchLoaded] = useState(false);
  const [detailLoaded, setDetailLoaded] = useState(false);

  return (
    <>
      <NavBar
        numResults={movies?.length}
        onQuery={setMovies}
        onLoading={setSearchLoaded}
      ></NavBar>
      <Main>
        <Movies
          movies={movies}
          onSelect={setSelectedMovie}
          loaded={searchLoaded}
          onLoading={setDetailLoaded}
        />
        {!detailLoaded && !selectedMovie ? (
          <WatchedMovies watchedMovies={watchedMovies} />
        ) : (
          <Details
            movie={selectedMovie}
            onBack={setSelectedMovie}
            loaded={detailLoaded}
          />
        )}
      </Main>
    </>
  );
}

export default App;

// async function getJSON(url) {
//   try {
//     const response = await fetch(url);
//   } catch (err) {
//     throw err;
//   }
// }
