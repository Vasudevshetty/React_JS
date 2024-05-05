import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import styles from "./styles/PageNav.module.scss";

export function PageLink({ page }) {
  return (
    <li>
      <NavLink to={page} className={page === "login" && styles.ctaLink}>
        {page.at(0) === "/" ? page.slice(1) : page}
      </NavLink>
    </li>
  );
}
PageLink.propTypes = {
  page: PropTypes.string.isRequired,
};
