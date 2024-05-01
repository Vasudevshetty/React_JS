import { useEffect, useState } from "react";
import { getJSON, searchURL } from "../data";

export default function NavBar({
  numResults = 0,
  onQuery,
  onLoading,
  onError,
}) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      <Search onQuery={onQuery} onLoading={onLoading} onError={onError} />
      <p className="num-results">
        Found <strong>{numResults}</strong> results
      </p>
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ onQuery, onLoading, onError }) {
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      async function handleSearch() {
        try {
          onLoading(true);
          const data = await getJSON(searchURL(query));
          if (!data) return;
          onLoading(false);
          onQuery(data.Search);
        } catch (err) {
          onError(err.message);
        } finally {
          onLoading(false);
        }
      }

      handleSearch();
    },
    [query, onLoading, onQuery, onError]
  );

  return (
    <>
      <input
        type="text"
        className="search"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </>
  );
}
