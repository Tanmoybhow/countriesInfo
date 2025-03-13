import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";
import Error from "./Error";
const CountryList = ({query,region}) => {
  console.log(region);
  let [allCountryList, setAllCountryList] = useState([]);
  const [countryCOD,setCountryCOD] = useState({});
  useEffect(() => {
   fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAllCountryList(data);
        setCountryCOD(data.map((country)=>{
          return countryCOD[country.cca3] = country.name.common;
        }))
      }).catch((error)=>{
        <Error/>
      })
  }, []);
  allCountryList = allCountryList.filter((country)=>{
    return country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
  })
  if(region){
  allCountryList = allCountryList.filter((country)=>{
    return country.region.toLowerCase() === region;
  })}
  // console.log(x);
  return (
    allCountryList.length===0?<CountryListShimmer/>:(
    <div className="countries" id="countries">
      {allCountryList.map((country) => {
        return (
          <CountryCard key={country.name.common}
            name={country.name.common}
            flags={country.flags.svg}
            population={country.population}
            region = {country.region}
            capital = {country.capital}
            countryCOD={countryCOD}
            country={country}
          />
        );
      })}
    </div>
    )
  );
};

export default CountryList;
