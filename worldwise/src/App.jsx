import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function loadCities() {
      try {
        const response = await fetch("http://localhost:8000/cities");
        const data = await response.json();
        setCities(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} />} />
          <Route path="cities" element={<CityList cities={cities} />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
