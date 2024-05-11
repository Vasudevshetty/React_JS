import CityItem from "./CityItem";
import Spinner from "./Spinner";
import styles from "./styles/CityList.module.scss";
import Message from "./Message";
import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useContext(CitiesContext);
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  return (
    <ul className={styles.cityList}>
      {!isLoading &&
        cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>
  );
}

export default CityList;
