import { GET_ALL, GET_DATA_POKEMON } from "./action";

const initialState = {
  all: [],
  pokemonData: []
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL) {
    return {
      all: action.payload,
    };
  }
  if (action.type === GET_DATA_POKEMON) {
    return {
      ...state.pokemonData,
      pokemonData: action.payload,
    };
  }
  return state;
}

export default rootReducer;
