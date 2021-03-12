import React from "react";
import propTypes from "prop-types";
import s from "./SearchForm.module.css";

const SearchForm = ({ filter, inputForm }) => {
  return (
    <div className={s.searchForm}>
      <label htmlFor="">
        Find contact by name{" "}
        <input type="text" name="filter" value={filter} onChange={inputForm} />
      </label>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  filter: propTypes.string.isRequired,
  inputForm: propTypes.func.isRequired,
};
