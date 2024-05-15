import { useContext, useEffect, useState } from "react";
import styles from "./styles/Form.module.scss";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import DatePicker from "react-datepicker";
import Message from "./Message";
import "react-datepicker/dist/react-datepicker.css";
import { CitiesContext } from "../contexts/CitiesContext";

function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

function Form() {
  const { createCity, isLoading } = useContext(CitiesContext);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");

  const navigate = useNavigate();
  const [posLoading, setPosLoading] = useState(false);
  const [geoError, setGeoError] = useState("");

  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    async function fetchCity() {
      if (!lat && !lng) return;
      try {
        setPosLoading(true);
        setGeoError("");
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await response.json();
        setPosLoading(false);

        if (!data.countryCode)
          throw new Error(
            "That doesnt seems to be a city. Click somewhere else."
          );

        console.log(data);
        setCityName(data.city || data.locality);
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeoError(err.message);
      } finally {
        setPosLoading(false);
      }
    }
    fetchCity();
  }, [lat, lng]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;
    console.log(country);

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    createCity(newCity);
    if (!isLoading) navigate("../cities");
  }

  if (geoError) return <Message message={geoError} />;
  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map." />;

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" onClick={navigate}>
          Add
        </Button>
        <ButtonBack />
      </div>
    </form>
  );
}

export default Form;
