import { useState } from "react";
import { getJSON, searchURL } from "../data";

export default function NavBar({ numResults, onQuery }) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      <Search onQuery={onQuery} />
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

function Search({ onQuery }) {
  const [query, setQuery] = useState("");

  async function handleSearch() {
    try {
      const data = await getJSON(searchURL(query));
      if (!data) return;
      onQuery(data.Search);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <input
        type="text"
        className="search"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch();
        }}
      />
    </>
  );
}