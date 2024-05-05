import styles from "./styles/AppLayout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout() {
  return (
    <main className={styles.app}>
      <Sidebar />
      <Map />
    </main>
  );
}

export default AppLayout;
