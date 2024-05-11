import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CitiesContext } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import styles from "./styles/City.module.scss";
import ButtonBack from "./ButtonBack";

const fromatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { currentyCity, loadCity, isLoading } = useContext(CitiesContext);

  useEffect(() => {
    loadCity(id);
  }, [loadCity, id]);

  if (!isLoading) return <Spinner />;

  const { cityName, emoji, date, notes } = currentyCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{fromatDate(date || null)}</p>
      </div>
      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;
