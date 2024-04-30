import "./index.css";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Main, Movies, WatchedMovies, Details } from "./components/Main";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);

  return (
    <>
      <NavBar numResults={movies?.length} onQuery={setMovies}></NavBar>
      <Main>
        <Movies movies={movies} onSelect={setSelectedMovie} />
        {!selectedMovie ? (
          <WatchedMovies watchedMovies={watchedMovies} />
        ) : (
          <Details movie={selectedMovie} onBack={setSelectedMovie} />
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
