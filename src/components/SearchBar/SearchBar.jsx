import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { updateSearchText } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Search by beer name!"
        onBlur={(e) => updateSearchText(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
