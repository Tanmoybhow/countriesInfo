import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";
import useThemeContext from "../hooks/useThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [region,setRegion] = useState("");
  const [isDark] = useThemeContext();
  return (
    <>
      <div className={`search-filter ${isDark ? "darkMood" : ""}`}>
        <div className="container">
          <Search setQuery={setQuery}/>
          <Filter setRegion={setRegion}/>
        </div>
      </div>
      <main className={`${isDark?"darkMood":""}`}>
        <div className="container">
          <CountryList  query={query.toLowerCase()} region={region.toLowerCase()}/>
        </div>
      </main>
    </>
  );
};

export default Home;
