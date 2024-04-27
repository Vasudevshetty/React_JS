import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <PizzaList pizzas={pizzaData} />
    </main>
  );
}

function PizzaList({ pizzas }) {
  const pizzasLenght = pizzas?.length;
  // const pizzasLenght = 0;

  return pizzasLenght > 0 ? (
    <>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious
      </p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
      </ul>
    </>
  ) : (
    <p>We are still working on our menu. Please come back later ):</p>
  );
}

function Pizza({ pizza }) {
  const { soldOut } = pizza;
  return (
    <li className={!soldOut ? "pizza" : "pizza sold-out"}>
      <img src={pizza.photoName} alt="Pizza spinaci"></img>
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{soldOut ? "Sold out".toUpperCase() : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const close = 20;
  const isOpen = hour >= open && hour <= close;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open until {close}:00. Come visite us or order online</p>
          <Button />
        </div>
      ) : (
        <p>
          We are happy to welcome you between {open}:00 and {close}:00
        </p>
      )}
    </footer>
  );
}

function Button() {
  return <button className="btn">Order</button>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
