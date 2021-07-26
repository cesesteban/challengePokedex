import React from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/img/Pokeball.png";
import { getAll } from "../../store/action";
import { makeStyles } from "@material-ui/core/styles";
import "./NavBar.css";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  margin: {
    "&:hover": {
      background: "none",
    },
  },
}));
function NavBar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <img src={logo} className="img" alt="logo" />
      <IconButton
        onClick={() => {
          dispatch(getAll("https://pokeapi.co/api/v2/pokemon"));
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
