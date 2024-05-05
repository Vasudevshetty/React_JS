import PageNav from "../components/PageNav";
import styles from "./styles/Product.module.scss";

function Pricing() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing. <br />
            Just $9/month
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
            tempore ut reprehenderit beatae non alias pariatur eos doloribus
            atque autem..
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrappers" />
      </section>
    </main>
  );
}

export default Pricing;
