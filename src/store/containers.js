//containers will link the sotre to respective components

import ProductPage from "../ProductPage";
import { connect } from "react-redux";
import {
  fetchProducts,
  addItemToCart,
  toggleCart,
  incrementQuantity,
  decrementQuantity,
} from "./actions";
import CartModal from "../components/CartModal";

export const ProductsContainer = connect(
  (state) => ({ products: state.products }),
  (dispatch) => ({
    onLoadProducts: () => dispatch(fetchProducts()),
    onAddItem: (id) => dispatch(addItemToCart(id)),
    onToggleCart: (cartStatus) => dispatch(toggleCart(cartStatus)),
  })
)(ProductPage);

export const Cart = connect(
  (state) => ({ cart: state.cart, cartModal: state.cartModal }),
  (dispatch) => () => ({
    onToggleCart: (cartStatus) => dispatch(toggleCart(cartStatus)),
    onIncrement: (id) => dispatch(incrementQuantity(id)),
    onDecrement: (id, quantity) => dispatch(decrementQuantity(id, quantity)),
  })
)(CartModal);
