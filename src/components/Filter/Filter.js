import React from "react";
import "./Filter.css"

function Filter({ setURL }) {
  return (
    <div >
        <div className="filter-position">
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        }}
      >
        Kanto
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151");
        }}
      >
        Johto
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251");
        }}
      >
        Hoenn
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=108&offset=386");
        }}
      >
        Sinnoh
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=155&offset=494");
        }}
      >
        Unova
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=72&offset=649");
        }}
      >
        Kalos
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=88&offset=721");
        }}
      >
        Alola
      </button>
      <button className="buttons"
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=89&offset=809");
        }}
      >
        Galar
      </button>
      </div>
      <div className="line"><br/></div>
    </div>
  );
}

export default Filter;
