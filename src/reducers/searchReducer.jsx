import { SET_SEARCHFIELD } from "../actions/types";

const initialState = {
  searchField: ""
}


export default (state = initialState, action) => {
switch (action.type) {
  case SET_SEARCHFIELD:
    return {
      ...state,
      searchField: action.payload
    };

  default:
    return state;
}
}
