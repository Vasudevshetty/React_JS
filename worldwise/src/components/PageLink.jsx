import { NavLink } from "react-router-dom";
import styles from "./styles/PageNav.module.scss";

export default function PageLink({ page }) {
  return (
    <li>
      <NavLink to={page} className={page === "/login" && styles.ctaLink}>
        {page.at(0) === "/" ? page.slice(1) : page}
      </NavLink>
    </li>
  );
}
