import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { connect } from "react-redux";
import { toggleCart } from "./store/actions";

function Home({ cart, onToggleCart }) {
  return (
    <div className="App">
      <Hero />
      <CartModal state={cart} onClick={onToggleCart} />
    </div>
  );
}

const mapStateToProps = (state) => ({ cart: state.cart });

const mapDispatchToProps = (dispatch) => ({
  onToggleCart: (cartStatus) => dispatch(toggleCart(cartStatus)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
