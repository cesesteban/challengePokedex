import React, { useEffect, useState } from "react";
import {colorType} from "../../assets/colors/colorUtils"
import "./Card.css";
import CardDetails from "../CardDetails/CardDetails";
import Backdrop from "@material-ui/core/Backdrop";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  //const [statePokemon, setStatePokemon] = useState("");
  const [open, setOpen] = useState(false);
  //const [finalColor, setFinalColor] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    //setStatePokemon(pokemon)
    //setFinalColor(colorType(pokemon.types))
  },[handleToggle])

  return (
    <div className="card-style">
      {pokemon ? (
        <div className="card" 
        //style={{borderColor: finalColor[0]}}
        >
          <div className="card-header">
            <p className="card-code" 
            //style={{color: finalColor[0]}}
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
          <div className="card-body" 
          //style={{backgroundColor: finalColor[0]}}
          >
            <p className="card-name">{pokemon}</p>
          </div>
        </div>
      ) : (
        <div>{pokemon === "err" ? "Not Result" : "loading..."}</div>
      )}
      {/* <Backdrop className={classes.backdrop} open={open}>
        {statePokemon &&
        statePokemon.sprites &&
        statePokemon.sprites.front_default &&
        statePokemon.moves &&
        statePokemon.moves[0] &&
        statePokemon.moves[1] &&
        statePokemon.moves[0].move &&
        statePokemon.moves[0].move.name &&
        statePokemon.types &&
        statePokemon.types[0] &&
        statePokemon.types[0].type &&
        statePokemon.types[0].type.name ? (
          <CardDetails finalColor={finalColor} statePokemon={statePokemon} handleClose={handleClose} />
        ) : (
          "loading..."
        )}
      </Backdrop> */}
    </div>
  );
}

export default Card;
