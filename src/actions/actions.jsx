import { SET_SEARCHFIELD } from "./types";

//Grabs the text vaule from search input 


export const setSearchField = (text) => async dispatch => {
  console.log(text);
  
  dispatch({
    type: SET_SEARCHFIELD,
    payload: text
  })
}
