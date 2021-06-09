import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={`${styles.Card}`}>
      <img src="https://images.punkapi.com/v2/keg.png" alt="img of beer"></img>
      <div className={`${styles.BeerDesc}`}>
        <h3>Beer</h3>
        <p>4%</p>
        <p>desc</p>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default Card;
