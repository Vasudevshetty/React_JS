import styles from "./styles/AppNav.module.scss";
import { PageLink } from "./PageLink";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <PageLink page="cities" />
        <PageLink page="countries" />
      </ul>
    </nav>
  );
}

export default AppNav;
