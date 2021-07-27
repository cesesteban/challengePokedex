import React, { useEffect, useState } from "react";
import {colorType} from "../../assets/colors/colorUtils"
import "./Card.css";
import axios from "axios";
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
function Card({ name, url }) {
  const classes = useStyles();
  const [statePokemon, setStatePokemon] = useState("");
  const [open, setOpen] = useState(false);
  const [finalColor, setFinalColor] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getData = async (setStatePokemon) => {
      const res = await axios
        .get(url)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return "err";
        });
      setStatePokemon(res);
      setFinalColor(colorType(res.types));
    };
    const timer = setTimeout(() => {
      getData(setStatePokemon);
    }, 1500);
    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className="card-style">
      {statePokemon &&
      statePokemon.sprites &&
      statePokemon.sprites.front_default &&
      statePokemon.types &&
      statePokemon.types[0] &&
      statePokemon.types[0].type &&
      statePokemon.types[0].type.name ? (
        <div className="card" style={{borderColor: finalColor[0]}}>
          <div className="card-header">
            <p className="card-code" style={{color: finalColor[0]}}>
              #{String(statePokemon.id).padStart(3, "0")}
            </p>
            <IconButton onClick={handleToggle} className={classes.margin}>
              <img
                className="card-img"
                src={statePokemon.sprites.front_default}
                alt="img"
              />
            </IconButton>
          </div>
          <div className="card-body" style={{backgroundColor: finalColor[0]}}>
            <p className="card-name">{name}</p>
          </div>
        </div>
      ) : (
        <div>{statePokemon === "err" ? "Not Result" : "loading..."}</div>
      )}
      <Backdrop className={classes.backdrop} open={open}>
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
      </Backdrop>
    </div>
  );
}

export default Card;
