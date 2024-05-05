import styles from "./styles/Home.module.scss";

function Home() {
  return (
    <main className={styles.home}>
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
      </section>
    </main>
  );
}

export default Home;
