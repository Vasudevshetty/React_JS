import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";

import styles from "./styles/PageNav.module.scss";

function PageNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <PageLink page="pricing" />
        <PageLink page="product" />
      </ul>
    </div>
  );
}

export default PageNav;

function PageLink({ page }) {
  return (
    <li>
      <NavLink to={"/" + page}>{page}</NavLink>
    </li>
  );
}

PageLink.propTypes = {
  page: PropTypes.string.isRequired,
};
