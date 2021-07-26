import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";
import CardDetails from "../CardDetails/CardDetails";
import Backdrop from "@material-ui/core/Backdrop";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer,
    color: "#fff",
  },
}));
function Card({ name, url }) {
  const classes = useStyles();
  const [statePokemon, setStatePokemon] = useState("");
  const [open, setOpen] = useState(false);
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
      console.log(res);
    };
    getData(setStatePokemon);
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
        <div className="card">
          <div className="card-header">
            <p className="card-code">
              #{String(statePokemon.id).padStart(3, "0")}
            </p>
            <img
              onClick={handleToggle}
              className="card-img"
              src={statePokemon.sprites.front_default}
              alt="img"
            />
          </div>
          <div className="card-body">
            <p className="card-name">{name}</p>
          </div>
        </div>
      ) : (
        <div>{statePokemon !== "err" ? "loading..." : "Not Result"}</div>
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
          <CardDetails statePokemon={statePokemon} handleClose={handleClose} />
        ) : (
          "loading..."
        )}
      </Backdrop>
    </div>
  );
}

export default Card;
