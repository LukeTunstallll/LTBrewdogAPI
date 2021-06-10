import Card from "./components/Card";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import styles from "./App.module.scss";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);
  const getBeers = async (searchTerm) => {
    const api_URL = `https://api.punkapi.com/v2/beers/beer_name/punk`;
    const response = await fetch(api_URL);
    const beers = await response.json();
  };

  return (
    <div className="App">
      <NavBar />
      <Card />
    </div>
  );
}

export default App;
