import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="Worldwise logo" style={{ height: "5.2rem" }} />
    </Link>
  );
}

export default Logo;
