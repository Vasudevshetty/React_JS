import { useState, useEffect, createContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function loadCity(id) {
    try {
      setIsLoading(true);
      const resp = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await resp.json();
      setIsLoading(false);
      setCurrentCity(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const resp = await fetch(`http://localhost:8000/cities/`, {
        method: "post",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      setIsLoading(false);
      setCities((cities) => [...cities, data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:8000/cities/${id}`, {
        method: "delete",
      });
      setIsLoading(false);
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function loadCities() {
      try {
        const response = await fetch("http://localhost:8000/cities");
        setIsLoading(true);
        const data = await response.json();
        setIsLoading(false);
        setCities(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        deleteCity,
        loadCity,
        createCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider, CitiesContext };
