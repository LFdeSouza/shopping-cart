import { incrementQuantity } from "./actions";
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
    case C.ADD_PRODUCT:
      return state.some((item) => item.id === action.product.id)
        ? state.map((item) =>
            cartItem(item, incrementQuantity(action.product.id))
          )
        : [...state, cartItem({}, action)];
    case C.INCREMENT_QUANTITY:
      return state.map((item) => cartItem(item, action));
    case C.DECREMENT_QUANTITY:
      return action.quantity === 1
        ? state.filter((item) => item.id !== action.target)
        : state.map((item) => cartItem(item, action));
    default:
      return state;
  }
};

const cartItem = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_PRODUCT:
      return {
        id: action.product.id,
        title: action.product.title,
        image: action.product.image,
        price: action.product.price,
        quantity: 1,
      };
    case C.INCREMENT_QUANTITY:
      return state.id !== action.target
        ? { ...state }
        : { ...state, quantity: state.quantity + 1 };
    case C.DECREMENT_QUANTITY:
      return state.id !== action.target
        ? { ...state }
        : { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};

export const cartModal = (state = false, action) => {
  switch (action.type) {
    case C.TOGGLE_CART:
      return !state;
    default:
      return state;
  }
};
