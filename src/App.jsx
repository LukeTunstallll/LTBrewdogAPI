import Card from "./components/Card";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import styles from "./App.module.scss";
import "./App.css";

const App = () => {
  const [beers, setBeers] = useState([]);
  const getBeers = async (searchTerm) => {
    const api_URL = `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`;
    const response = await fetch(api_URL);
    const beers = await response.json();

    if (beers === null) {
      return [];
    }

    // return beers.map((beer) => {
    //   const ingredients = [];
    //   for (let key in beer) {
    //     if (key.includes("name") && beer[key]) {
    //       ingredients.push(beer[key]);
    //     }
    //   }
    // });
    console.log(beers);
    return beers[0];
  };

  const updateBeers = async (searchTerm) => {
    const beersArr = await getBeers(searchTerm);
    setBeers(beersArr);
  };

  return (
    <div className="App">
      <NavBar updateSearchText={updateBeers} />
      <Card beers={beers} />
    </div>
  );
};

export default App;
