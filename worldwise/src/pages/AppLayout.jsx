import styles from "./styles/AppLayout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "./../components/User";

function AppLayout() {
  return (
    <main className={styles.app}>
      <Sidebar />
      <User />
      <Map />
    </main>
  );
}

export default AppLayout;
