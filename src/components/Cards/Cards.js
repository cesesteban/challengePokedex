import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css";
import { getSearch } from "../../store/action";

function Cards({ stateSearch }) {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false);
  const all = useSelector((state) => state.all);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getSearch(stateSearch));
    if (stateSearch.length > 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [dispatch, stateSearch]);

  return (
    <div>
      {isSearch === false ? (
        <div className="cards-position">
          {all && all[0]
            ? all.map((pokemon) => {
                return <Card key={pokemon.id} pokemon={pokemon} />;
              })
            : "Loading..."}
        </div>
      ) : (
        <div className="cards-position">
          {search.length !== 0
            ? search.map((pokemon) => {
                return <Card key={pokemon.id} pokemon={pokemon} />;
              })
            : "No date result"}
        </div>
      )}
    </div>
  );
}

export default Cards;
