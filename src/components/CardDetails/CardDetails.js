import React, { useState } from "react";
import "./CardDetails.css";
import { makeStyles } from "@material-ui/core/styles";
import arrowback from "../../assets/img/arrowback.png";
import PokeballCard from "../../assets/img/PokeballCard.png";
import weightImg from "../../assets/img/weight.png";
import heightImg from "../../assets/img/height.png";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    "&:hover": {
      background: "none",
    },
    marginRight: "15px",
    marginTop: "-20px",
    marginLeft: "-60px",
  },
  margin2: {
    "&:hover": {
      background: "none",
    },
  },
}));
function CardDetails({ finalColor, statePokemon, handleClose }) {
  const classes = useStyles();
  const [imgPosition, setImgPosition] = useState(
    statePokemon.sprites.front_default
  );
  return (
    <div>
      <div className="card-detail">
        <div className="card-detail-header" style={{backgroundColor: finalColor[0]}}>
          <div className="card-detail-title">
            <div className="card-detail-arrowtitle">
              <img
                className="card-detail-PokeballCard"
                src={PokeballCard}
                alt="PokeballCard"
              />
              <IconButton
                onClick={handleClose}
                className={classes.margin}
                size="small"
              >
                <img src={arrowback} alt="arrowback" />
              </IconButton>
              <p className="card-detail-name">{statePokemon.name}</p>
            </div>
            <div>
              <p className="card-detail-code">
                #{String(statePokemon.id).padStart(3, "0")}
              </p>
            </div>
          </div>
          <div className="img-position">
            <IconButton
              onClick={() => setImgPosition(statePokemon.sprites.front_default)}
              className={classes.margin2}
              size="small"
            >
              <div className="img-rotation">-</div>
            </IconButton>
            <img className="card-detail-img" src={imgPosition} alt="img" />
            <IconButton
              onClick={() => setImgPosition(statePokemon.sprites.back_default)}
              className={classes.margin2}
              size="small"
            >
              <div className="img-rotation">-</div>
            </IconButton>
          </div>
        </div>
        <div className="card-detail-body" style={{borderColor: finalColor[0]}}>
          <div className="card-detail-pills-div">
            {statePokemon.types.map((type) => {
              return (
                <div key={type.type.name} className="card-detail-pill" style={{backgroundColor: finalColor[0]}}>
                  <p className="card-detail-pill-text">{type.type.name}</p>
                </div>
              );
            })}
          </div>
          <div className="card-detail-about">
            <p className="card-detail-about-title" style={{color: finalColor[0]}}>About</p>
            <div className="card-detail-about-details">
              <div className="card-detail-about-details-weight">
                <div className="card-detail-about-details-weight-detail">
                  <div>
                    <img className="img-weight" src={weightImg} alt="weight" />
                  </div>
                  <p className="card-detail-about-details-text">
                    {statePokemon.weight}kg
                  </p>
                </div>
                <p className="card-detail-about-details-text-description" style={{color: finalColor[0]}}>
                  weight
                </p>
              </div>
              <div className="card-detail-about-details-height">
                <div className="card-detail-about-details-weight-detail">
                  <div>
                    <img className="img-weight" src={heightImg} alt="weight" />
                  </div>
                  <p className="card-detail-about-details-text">
                    {statePokemon.height}m
                  </p>
                </div>
                <p className="card-detail-about-details-text-description" style={{color: finalColor[0]}}>
                  height
                </p>
              </div>
              <div className="card-detail-about-details-moves">
                <div className="card-detail-about-details-moves-detail">
                  <p className="card-detail-about-details-moves-text">
                    {statePokemon.moves[0].move.name}
                  </p>
                  <p className="card-detail-about-details-moves-text">
                    {statePokemon.moves[1].move.name}
                  </p>
                </div>
                <p className="card-detail-about-details-text-description" style={{color: finalColor[0]}}>
                  moves
                </p>
              </div>
            </div>
            <span className="card-detail-about-details-text"></span>
          </div>
          <div className="card-detail-basestats">
            <p className="card-detail-basestats-title" style={{color: finalColor[0]}}>Base Stats</p>
            <div className="card-detail-basestats-list">
              <div className="card-detail-basestats-list-stats">
                <p className="card-detail-basestats-list-stats-text" style={{color: finalColor[0]}}>HP</p>
                <p className="card-detail-basestats-list-stats-stat">
                  {statePokemon.stats[0].base_stat}
                </p>
                <meter
                  className="card-detail-basestats-list-stats-meter"
                  min="0"
                  max="250"
                  value={statePokemon.stats[0].base_stat}
                />
              </div>
              <div className="card-detail-basestats-list-stats">
                <p className="card-detail-basestats-list-stats-text" style={{color: finalColor[0]}}>ATK</p>
                <p className="card-detail-basestats-list-stats-stat">
                  {statePokemon.stats[1].base_stat}
                </p>
                <meter
                  className="card-detail-basestats-list-stats-meter"
                  min="0"
                  max="250"
                  value={statePokemon.stats[1].base_stat}
                />
              </div>
              <div className="card-detail-basestats-list-stats">
                <p className="card-detail-basestats-list-stats-text" style={{color: finalColor[0]}}>DEF</p>
                <p className="card-detail-basestats-list-stats-stat">
                  {statePokemon.stats[2].base_stat}
                </p>
                <meter
                  className="card-detail-basestats-list-stats-meter"
                  min="0"
                  max="250"
                  value={statePokemon.stats[2].base_stat}
                />
              </div>
              <div className="card-detail-basestats-list-stats">
                <p className="card-detail-basestats-list-stats-text" style={{color: finalColor[0]}}>SATK</p>
                <p className="card-detail-basestats-list-stats-stat">
                  {statePokemon.stats[3].base_stat}
                </p>
                <meter
                  className="card-detail-basestats-list-stats-meter"
                  min="0"
                  max="250"
                  value={statePokemon.stats[3].base_stat}
                />
              </div>
              <div className="card-detail-basestats-list-stats">
                <p className="card-detail-basestats-list-stats-text" style={{color: finalColor[0]}}>SDEF</p>
                <p className="card-detail-basestats-list-stats-stat">
                  {statePokemon.stats[4].base_stat}
                </p>
                <meter
                  className="card-detail-basestats-list-stats-meter"
                  min="0"
                  max="250"
                  value={statePokemon.stats[4].base_stat}
                />
              </div>
              <div className="card-detail-basestats-list-stats">
                <p className="card-detail-basestats-list-stats-text" style={{color: finalColor[0]}}>SPD</p>
                <p className="card-detail-basestats-list-stats-stat">
                  {statePokemon.stats[5].base_stat}
                </p>
                <meter
                  className="card-detail-basestats-list-stats-meter"
                  min="0"
                  max="250"
                  value={statePokemon.stats[5].base_stat}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
