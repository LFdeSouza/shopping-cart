import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useEffect } from "react";
import ProductsComponent from "./components/ProductsComponent";
import { connect } from "react-redux";
import { fetchProducts, addItemToCart, toggleCart } from "./store/actions";

function ProductPage({
  products,
  cart,
  onLoadProducts,
  onAddItem,
  onToggleCart,
}) {
  useEffect(() => {
    onLoadProducts();
  }, []);

  return (
    <div className="App">
      <Navbar openCart={onToggleCart} />
      <ProductsComponent products={products} onAdd={onAddItem} />
      <Footer />
      <CartModal cart={cart} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadProducts: () => dispatch(fetchProducts()),
  onAddItem: (id) => dispatch(addItemToCart(id)),
  onToggleCart: (cartStatus) => dispatch(toggleCart(cartStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
