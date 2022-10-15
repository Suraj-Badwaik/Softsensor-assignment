import { applyMiddleware, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
