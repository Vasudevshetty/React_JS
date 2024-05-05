import styles from "./styles/Sidebar.module.scss";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright by {new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
