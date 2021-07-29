import React, { useEffect } from "react";
import logo from "../../assets/img/Pokeball.png";
import { makeStyles } from "@material-ui/core/styles";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { getAll } from "../../store/action";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    "&:hover": {
      background: "none",
    },
  },
}));

function NavBar({ URL, setURL }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll(URL));
  }, [dispatch, URL]);

  return (
    <div className="navbar">
      <img src={logo} className="img" alt="logo" />
      <IconButton
        onClick={() => {
          setURL("https://pokeapi.co/api/v2/pokemon?limit=898");
        }}
        className={classes.margin}
      >
        <div className="title">Pokédex</div>
      </IconButton>
      <div className="vector">#↓</div>
    </div>
  );
}

export default NavBar;
