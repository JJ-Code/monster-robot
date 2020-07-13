import { GET_ROBOTS, SET_CURRENT_ROBOTS, ROTBOTS_ERROR } from "../actions/types";

const initialState = {
  robotFriends: [],
  error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROBOTS:
      return {
        ...state,
        robotFriends: action.payload
      };
    case SET_CURRENT_ROBOTS:
     
      return {
        ...state,
        robotFriends: state.robotFriends.filter(robotFriend => robotFriend.name.toLowerCase().includes(action.payload.toLowerCase()))
       
      };
    case ROTBOTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}
