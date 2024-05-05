import styles from "./styles/Home.module.scss";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <main className={styles.home}>
      <PageNav />
      <section>
        <h1>
          You travel the world
          <br />
          Worldwise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world
        </h2>
        <Link to="./app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

export default Home;
