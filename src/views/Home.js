import React, { useState } from "react";
import Cards from "../components/Cards/Cards";
import Filter from "../components/Filter/Filter";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";

function Home(props) {
  const [stateSearch, setStateSearch] = useState("");
  const [stateFilter, setStateFilter] = useState(false);
  const [stateRegion, setStateRegion] = useState("");
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=898");

  return (
    <div>
      <NavBar
        setStateRegion={setStateRegion}
        setStateFilter={setStateFilter}
        URL={URL}
        setURL={setURL}
      />
      <SearchBar 
        stateSearch={stateSearch} 
        setStateSearch={setStateSearch} 
      />
      <Filter
        setStateRegion={setStateRegion}
        setStateFilter={setStateFilter}
        setURL={setURL}
      />
      <Cards
        stateRegion={stateRegion}
        stateSearch={stateSearch}
        stateFilter={stateFilter}
      />
    </div>
  );
}

export default Home;
