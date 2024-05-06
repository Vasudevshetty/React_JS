import Logo from "../components/Logo";
import styles from "./styles/PageNav.module.scss";
import PageLink from "./PageLink";

function PageNav() {
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <PageLink page="/pricing" />
        <PageLink page="/product" />
        <PageLink page="/login" />
      </ul>
    </div>
  );
}

export default PageNav;
