import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [watchedMovies, setWatchedMovies] = useState(
    () => JSON.parse(localStorage.getItem("watchedMovies")) && null
  );
  useEffect(
    function () {
      localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    },
    [watchedMovies]
  );
  return [watchedMovies, setWatchedMovies];
}
