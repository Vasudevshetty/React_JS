import "./index.css";
import NavBar from "./components/NavBar";
import { tempMovieData, tempWatchedData } from "./data";
import { useState } from "react";
import { Main, Movies, WatchedMovies } from "./components/Main";

export const average = (array) =>
  array.reduce((acc, curr) => (acc = acc + curr), 0) / array.length;

function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData);

  return (
    <>
      <NavBar numResults={movies.length}></NavBar>
      <Main>
        <Movies movies={movies} />
        <WatchedMovies watchedMovies={watchedMovies} />
      </Main>
    </>
  );
}

export default App;
