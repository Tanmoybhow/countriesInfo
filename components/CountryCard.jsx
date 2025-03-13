import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({name,flags,population,region,capital,country}) => {
  return (
    <Link to={`./${name}`} state={country}>
    <div className="country-card" id="country-card">
      <img src={flags} alt="" />
      <div className="card-content">
        <h4>{name}</h4>
        <p>
          <span>Population: </span>
          <span>{population.toLocaleString('en-IN')}</span>
        </p>
        <p>
          <span>Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span>{capital}</span>
        </p>
      </div>
    </div>
    </Link>
  );
};

export default CountryCard;
