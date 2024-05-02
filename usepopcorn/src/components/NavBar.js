import { useEffect, useState } from "react";
import { getJSON, searchURL } from "../data";

export default function NavBar({
  numResults = 0,
  onQuery,
  onLoading,
  onError,
  onNewQuery,
}) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      <Search
        onQuery={onQuery}
        onLoading={onLoading}
        onError={onError}
        onNewQuery={onNewQuery}
      />
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

function Search({ onQuery, onLoading, onError, onNewQuery }) {
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function handleSearch() {
        try {
          onLoading(true);
          onError("");
          const data = await getJSON(searchURL(query), controller);
          if (data.Response === "False") throw new Error(data.Error);
          onLoading(false);
          onQuery(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") onError(err.message);
        } finally {
          onLoading(false);
        }
      }

      if (query.length < 3) {
        onQuery([]);
        onError("");
        return;
      }

      onNewQuery(null);
      handleSearch();

      return function () {
        controller.abort();
      };
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
