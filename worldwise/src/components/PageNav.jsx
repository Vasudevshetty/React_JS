import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import Logo from "../components/Logo";
import styles from "./styles/PageNav.module.scss";

function PageNav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <PageLink page="pricing" />
        <PageLink page="product" />
        <PageLink page="login" />
      </ul>
    </div>
  );
}

export default PageNav;

function PageLink({ page }) {
  return (
    <li>
      <NavLink to={"/" + page} className={page === "login" && styles.ctaLink}>
        {page}
      </NavLink>
    </li>
  );
}

PageLink.propTypes = {
  page: PropTypes.string.isRequired,
};
