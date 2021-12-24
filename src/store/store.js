import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { products, cart } from "./reducers";

const initialState = {};

const middleware = [thunk];
const store = createStore(
  combineReducers({ products, cart }),
  initialState,
  applyMiddleware(...middleware)
);

// store.subscribe(() => console.log(store.getState()));
export default store;