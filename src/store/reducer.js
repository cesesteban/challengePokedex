import { GET_ALL, GET_SEARCH } from "./action";

const initialState = {
  all: [],
  search: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_ALL) {
    // state.all.sort((x1, x2) => {
    //   if (x1.id < x2.id) {
    //     return -1;
    //   } else if (x1.id > x2.id) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
      return {
        ...state,
        all: action.payload
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
