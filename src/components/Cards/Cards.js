import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/action";
import Card from "../Card/Card";
import "./Cards.css";

function Cards({ stateSearch }) {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.all);
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    dispatch(getAll(URL));
  }, [URL, dispatch]);

  return (
    <div>
      {stateSearch === "" ? (
        <div>
          <div className="cards-position">
            {all.results && all.results[0]
              ? all.results.map((pokemon) => {
                  return (
                    <Card
                      key={pokemon.name}
                      name={pokemon.name}
                      url={pokemon.url}
                    />
                  );
                })
              : "loading..."}
          </div>
          <div className="pagination">
            {all.previous != null ? (
              <button
                className="pagination-button"
                onClick={() => {
                  setURL(all.previous);
                }}
              >
                -
              </button>
            ) : (
              <button className="pagination-button">-</button>
            )}
            {all.next != null ? (
              <button
                className="pagination-button"
                onClick={() => {
                  setURL(all.next);
                }}
              >
                +
              </button>
            ) : (
              <button className="pagination-button">+</button>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Card
            name={stateSearch}
            url={`https://pokeapi.co/api/v2/pokemon/${stateSearch}`}
          />
        </div>
      )}
    </div>
  );
}

export default Cards;
