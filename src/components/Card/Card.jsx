import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { name, image_url, abv, tagline } = props.beers;
  return (
    <div className={`${styles.Card}`}>
      <img src={image_url} alt={name}></img>
      <div className={`${styles.BeerDesc}`}>
        <h3>{name}</h3>
        <p>{abv}% abv</p>
        <p>{tagline}</p>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default Card;
