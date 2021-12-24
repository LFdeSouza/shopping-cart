import C from "./constants";

export const products = (state = [], action) => {
  switch (action.type) {
    case C.FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
};

export const cart = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
