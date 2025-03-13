import React from "react";

const Filter = ({setRegion}) => {
  function getFilter(e){
    setRegion(e.target.innerText)
  }
  return (
    <div className="filter">
      <span>Filter by Region</span>
      <i className="fa-solid fa-angle-down" />
      <div className="option" onClick={getFilter}>
        <p>Africa</p>
        <p>Americas</p>
        <p>Asia</p>
        <p>Europe</p>
        <p>Oceania</p>
      </div>
    </div>
  );
};

export default Filter;
