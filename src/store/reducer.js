import { GET_ALL } from "./action";

const initialState = {
  all: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL) {
    return {
      all: action.payload,
    };
  }
  return state;
}

export default rootReducer;
