import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
//import { createLogger } from "redux-logger";

const initialState = {};
//logger is the same thing as composeWithDevTools
//const logger = createLogger();
//const middleware = [thunk, logger];
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,

  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;