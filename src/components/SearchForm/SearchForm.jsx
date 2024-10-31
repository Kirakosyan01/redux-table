import React from "react";
import "./searchForm.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
export default function SearchForm() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch({ type: "SEARCH_SUBMIT", payload: e.target.value });
  };

  return (
    <div>
      <div className="SearchForm">
        <input onChange={handleSearchChange} type="text" />
        <button type="button">
          <CiSearch className="SearchFormIcon" />
        </button>
      </div>
    </div>
  );
}
