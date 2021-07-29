import { GET_ALL, GET_SEARCH, GET_POKEMON } from "./action";

const initialState = {
  all: [],
  pokemon: "",
  search: [],
  filter: "",
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL) {
    return {
      ...state,
      all: action.payload,
    };
  }
  if (action.type === GET_POKEMON) {
    return {
      ...state,
      pokemon: action.payload,
    };
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
