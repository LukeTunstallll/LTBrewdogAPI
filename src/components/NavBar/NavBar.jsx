import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.scss";

const NavBar = (props) => {
  const { updateSearchText } = props;
  return (
    <div className={`${styles.NavBar}`}>
      <SearchBar updateSearchText={updateSearchText} />
    </div>
  );
};

export default NavBar;
