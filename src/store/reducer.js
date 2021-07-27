import { GET_ALL, GET_SEARCH } from "./action";

const initialState = {
  all: [],
  search: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL) {
    const pokemon = state.all.find(
      (pokemon) => pokemon.name === action.payload.name
    );
    if (!pokemon) {
      return {
        ...state,
        all: state.all.concat(action.payload),
      };
    }
  }

  if (action.type === GET_SEARCH) {
    const search = [];
    for (let i in state.all) {
      if (state.all[i].name.includes(action.payload)) {
        search.push(state.all[i]);
      }
    }
    return {
      ...state,
      search: search,
    };
  }

  return state;
}

export default rootReducer;
