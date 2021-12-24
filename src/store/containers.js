import ProductPage from "../ProductPage";
import { connect } from "react-redux";
import { fetchProducts } from "./actions";

export const ProductsContainer = connect(
  (state) => ({ products: state.products }),
  (dispatch) => ({ onLoadProducts: () => dispatch(fetchProducts()) })
)(ProductPage);
