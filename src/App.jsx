import Card from "./components/Card";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import styles from "./App.module.scss";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const getBeers = async (searchTerm) => {
    if (searchTerm !== null) {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
      );
      const beers = await response.json();

      if (beers === null) {
        return [];
      }
      setBeers(beers);
      return beers;
    }
  };

  const getBeercard = (beer) => {
    return <Card beers={beer} />;
  };

  const updateBeers = async (searchTerm) => {
    const beersArr = await getBeers(searchTerm);
    setBeers(beersArr);
  };

  return (
    <div className="App">
      <NavBar updateSearchText={updateBeers} />
      <div className={styles.container}>{beers.map(getBeercard)}</div>
    </div>
  );
};

export default App;
