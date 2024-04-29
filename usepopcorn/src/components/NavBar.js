import { useState } from "react";

export default function NavBar({ numResults }) {
  return (
    <nav className="nav-bar">
      <Logo></Logo>
      <Search />
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

function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      type="text"
      className="search"
      value={query}
      placeholder="Search movies..."
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
}
