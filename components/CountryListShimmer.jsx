import React from "react";
import "./countryListShimmer.css";
const CountryListShimmer = () => {
  return (
    <div className="countries countries-shimmer">
      {Array.from({ length: 12 }).map((a,i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
};

export default CountryListShimmer;
