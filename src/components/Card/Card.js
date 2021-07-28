import React, { useEffect, useState } from "react";
import { colorType } from "../../assets/colors/colorUtils";
import "./Card.css";
import CardDetails from "../CardDetails/CardDetails";
import Backdrop from "@material-ui/core/Backdrop";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../store/action";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer,
    color: "#fff",
  },
  margin: {
    "&:hover": {
      background: "none",
    },
    marginTop: "-5px",
    marginLeft: "-10px",
  },
}));
function Card({ pokemon, id, url }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemon);
  const [pokemonDetails, setPokemonDetails] = useState("");
  const [open, setOpen] = useState(false);
  const [finalColor, setFinalColor] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setPokemonDetails('')
    dispatch(getPokemon(url));
    setOpen(!open);
  };

  useEffect(() => {
    setPokemonDetails(pokemonDetail);
    setFinalColor(colorType(pokemonDetail.types));
  }, [pokemonDetail]);

  return (
    <div className="card-style">
      {pokemon ? (
        <div
          className="card"
        >
          <div className="card-header">
            <p
              className="card-code"
            >
              #{String(id).padStart(3, "0")}
            </p>
            <IconButton onClick={handleToggle} className={classes.margin}>
              <img
                className="card-img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt="img"
              />
            </IconButton>
          </div>
          <div
            className="card-body"
          >
            <p className="card-name">{pokemon}</p>
          </div>
        </div>
      ) : (
        <div>{pokemon === "err" ? "Not Result" : "loading..."}</div>
      )}
      <Backdrop className={classes.backdrop} open={open}>
        {pokemonDetails &&
        pokemonDetails.sprites &&
        pokemonDetails.sprites.front_default &&
        pokemonDetails.moves &&
        pokemonDetails.moves[0] &&
        pokemonDetails.moves[1] &&
        pokemonDetails.moves[0].move &&
        pokemonDetails.moves[0].move.name &&
        pokemonDetails.types &&
        pokemonDetails.types[0] &&
        pokemonDetails.types[0].type &&
        pokemonDetails.types[0].type.name ? (
          <CardDetails
            finalColor={finalColor}
            id={id}
            pokemonDetails={pokemonDetails}
            handleClose={handleClose}
          />
        ) : (
          "Loading..."
        )}
      </Backdrop>
    </div>
  );
}

export default Card;
