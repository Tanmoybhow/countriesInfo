import React from "react";

const Search = ({setQuery}) => {
  return (
    <div className="search">
      <div className="btn" id="searchBtn">
        <i className="fa-solid fa-magnifying-glass" />
      </div>
      <input type="text" placeholder="Search for a country" id="search"  onChange={(e)=>setQuery(e.target.value)} />
    </div>
  );
};

export default Search;
