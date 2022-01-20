import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { products, cart, cartModal } from "./reducers";

const initialState = {};

const middleware = [thunk];
const store = createStore(
  combineReducers({ products, cart, cartModal }),
  initialState,
  applyMiddleware(...middleware)
);

export default store;
