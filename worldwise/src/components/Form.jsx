import { useEffect, useState } from "react";
import styles from "./styles/Form.module.scss";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());

  return String.fromCodePoint(...codePoints);
}

function Form() {
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

        setCityName(data.city || data.locality);
        setCountry(data.country);
        console.log(data);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeoError(err.message);
      } finally {
        setPosLoading(false);
      }
    }
    fetchCity();
  }, [lat, lng]);

  if (geoError) return <Message message={geoError} />;

  return (
    <form className={styles.form}>
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
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
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
