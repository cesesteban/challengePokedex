import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./Filter.css";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins",
    fontSize: "12px",
    lineHeight: "15px",
    margin: "5px",
    border: "1px outset ",
    borderRadius: "8px",
  },
}));


function Filter({ setURL, setStateFilter, setStateRegion }) {
  const classes = useStyles();
  return (
    <div >
      <div className="filter-position">
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
            setStateFilter(true);
            setStateRegion("Kanto")
          }}
        >
          Kanto
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151");
            setStateFilter(true);
            setStateRegion("Johto")
          }}
        >
          Johto
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=135&offset=251");
            setStateFilter(true);
            setStateRegion("Hoenn")
          }}
        >
          Hoenn
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=108&offset=386");
            setStateFilter(true);
            setStateRegion("Sinnoh")
          }}
        >
          Sinnoh
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=155&offset=494");
            setStateFilter(true)
            setStateRegion("Unova")
          }}
        >
          Unova
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=72&offset=649");
            setStateFilter(true);
            setStateRegion("Kalos")
          }}
        >
          Kalos
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=88&offset=721");
            setStateFilter(true);
            setStateRegion("Alola")
          }}
        >
          Alola
        </Button>
        <Button
          className={classes.root}
          onClick={() => {
            setURL("https://pokeapi.co/api/v2/pokemon?limit=89&offset=809");
            setStateFilter(true);
            setStateRegion("Galar")
          }}
        >
          Galar
        </Button>
      </div>
      <div className="line">
        <br />
      </div>
    </div>
  );
}

export default Filter;
