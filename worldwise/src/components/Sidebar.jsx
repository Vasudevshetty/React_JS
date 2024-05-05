import styles from "./styles/Sidebar.module.scss";
import Logo from "./Logo";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>list of cities</p>

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright by {new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
