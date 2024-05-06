import CityItem from "./CityItem";
import Spinner from "./Spinner";
import styles from "./styles/CityList.module.scss";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {!isLoading && cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>
  );
}

export default CityList;
