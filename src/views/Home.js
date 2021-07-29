import React, { useState } from "react";
import Cards from "../components/Cards/Cards";
import Filter from "../components/Filter/Filter";
import NavBar from "../components/NavBar/NavBar";
import SearchBar from "../components/SearchBar/SearchBar";

function Home(props) {
  const [stateSearch, setStateSearch] = useState("");
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=898");

  return (
    <div>
      <NavBar URL={URL} setURL={setURL} />
      <SearchBar stateSearch={stateSearch} setStateSearch={setStateSearch} />
      <Filter setURL={setURL} />
      <Cards stateSearch={stateSearch} />
    </div>
  );
}

export default Home;
