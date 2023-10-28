import React from "react";
import "./searchbar.css";

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by Name, Email or Role "
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
