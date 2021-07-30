import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css";
import { getSearch } from "../../store/action";

function Cards({ stateSearch, stateFilter, stateRegion }) {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState(false);
  const [imgState, setImgState] = useState("");
  const all = useSelector((state) => state.all);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(getSearch(stateSearch));
    if (stateSearch.length > 0) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
    switch (stateRegion) {
      case "":
        setImgState("");
        break;
      case "Kanto":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20180712231931/Mapa_de_Kanto_LGPE.png"
          );
        break;
      case "Johto":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/f/fe/latest/20180203062443/Johto_HGSS.png"
          );
        break;
      case "Hoenn":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/a/af/latest/20150228012617/Mapa_de_Hoenn_ROZA.png"
          );
        break;
      case "Sinnoh":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/b/b2/latest/20190121210046/Sinnoh.jpg"
          );
        break;
      case "Unova":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/2/29/latest/20160818015101/Teselia_N2B2.png"
          );
        break;
      case "Kalos":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/0/05/latest/20160917035956/Mapa_Kalos.png"
          );
        break;
      case "Alola":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/e/e5/latest/20170819025541/Alola_USUL.png"
          );
        break;
      case "Galar":
          setImgState(
            "https://images.wikidexcdn.net/mwuploads/wikidex/4/41/latest/20190227161647/Galar.png"
          );
        break;
      default:
        setImgState("");
        break;
    }
  }, [dispatch, stateSearch, stateRegion]);

  return (
    <div style={{ backgroundImage: `url("${imgState}")`, backgroundSize:"cover", backgroundPosition:"center center" }}>
      {isSearch === false ? (
        <div className="cards-position">
          {all && all[0]
            ? all.map((pokemon) => {
                return (
                  <Card
                    key={pokemon.name}
                    pokemon={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.substring(34, pokemon.url.length - 1)}
                  />
                );
              })
            : "Loading..."}
        </div>
      ) : (
        <div className="cards-position">
          {search.length !== 0
            ? search.map((pokemon) => {
                return (
                  <Card
                    key={pokemon.name}
                    pokemon={pokemon.name}
                    url={pokemon.url}
                    id={pokemon.url.substring(34, pokemon.url.length - 1)}
                  />
                );
              })
            : stateFilter === false
            ? "No date result"
            : "No date result, please check in other region..."}
        </div>
      )}
    </div>
  );
}

export default Cards;
