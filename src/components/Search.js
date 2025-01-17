import React from "react";

function Search({filterSearch}) {


  function onSearch(e) {
    filterSearch(e.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearch(e)}
      />
    </div>
  );
}

export default Search;
