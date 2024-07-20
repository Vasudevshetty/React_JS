import styles from "./styles/CountryList.module.scss";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useContext(CitiesContext);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first Countriy by clicking on a city on the map." />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.city).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
