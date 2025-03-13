import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import DetailsShimmer from "./DetailsShimmer";
import { ThemeContext } from "../context/ThemeContext";

const CountryDetail = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const param = useParams();
  const {state} = useLocation();
  console.log(state)
  let countryName = param.country;
  const [isDark] = useContext(ThemeContext);

  function showCountryList(data){
    let bordersArray = data.borders || [];

    setCountryInfo({
      name: data.name.common || data.name,
      flagImg: data.flags.svg,
      nativeName: Object.values(data.name.nativeName ||{})[0]?.common || 'Not Available',
      population: data.population.toLocaleString("en-IN"),
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital?.join(", ")||'Not Available',
      domain: data.tld?.join(","),
      currencies: Object.values(data.currencies ||{})
        .map((curr) => curr.name)
        .join("") || 'Not Available',
      languages: Object.values(data.languages || {}).join(", ") || 'Not Available',
      borders: [],
    });
    if (bordersArray.length > 0) {
      Promise.all(
        bordersArray.map(async (borderCode) => {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${borderCode}`
          );
          const [borderData] = await response.json();
          return borderData.name.common;
        })
      ).then((bordersList) => {
        setCountryInfo((prevState) => ({
          ...prevState,
          borders: bordersList,
        }));
      });
    }
  }

  useEffect(() => {
    if(state){
      showCountryList(state);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${countryName.toLowerCase()}`)
      .then((response) => response.json())
      .then(([data]) => {
        // console.log(data);
        showCountryList(data);

      });
  }, [countryName]);


  return countryInfo === null ? (
    <DetailsShimmer />
  ) : (
    <main className={`countryDetails ${isDark?"darkMood":""}`}>
      <div className="container">
        <div className="backBtn" id="backBtn" onClick={() => history.back()}>
          <p>
            <i className="fa-solid fa-arrow-left-long"></i> Back
          </p>
        </div>
        <div className="main-content" id="main-content">
          <div>
            <div className="country-img">
              <img src={countryInfo.flagImg} alt="" />
            </div>
            <div className="country-info">
              <h3>{countryInfo.name}</h3>
              <div className="more-info">
                <div className="left">
                  <p>
                    <span>Native Name: </span>
                    {countryInfo.nativeName || countryInfo.name}
                  </p>
                  <p>
                    <span>Population: </span>
                    {countryInfo.population}
                  </p>
                  <p>
                    <span>Region: </span>
                    {countryInfo.region}
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    {countryInfo.subRegion ? countryInfo.subRegion : "Not Available"}
                  </p>
                  <p>
                    <span>Capital: </span>
                    {countryInfo.capital}
                  </p>
                </div>
                <div className="right">
                  <p>
                    <span>Top Level Domain: </span>
                    {countryInfo.domain}
                  </p>
                  <p>
                    <span>Currencies: {countryInfo.currencies} </span>
                  </p>
                  <p>
                    <span>Languages: </span>
                    {countryInfo.languages}
                  </p>
                </div>
              </div>
              {countryInfo.borders.length > 0 ? (
                <div className="borders">
                  <span>Border countries: </span>
                  <div>
                    {countryInfo.borders.map((border) => (
                      <Link key={border} to={`/${border.toLowerCase()}`}>
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                "No border available"
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
