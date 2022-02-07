import "./App.css";
import Hero from "./components/Hero";
import { connect } from "react-redux";
import { toggleCart } from "./store/actions";

function Home({ cart, onToggleCart }) {
  return (
    <div className="App">
      <Hero />
    </div>
  );
}

const mapStateToProps = (state) => ({ cart: state.cart });

const mapDispatchToProps = (dispatch) => ({
  onToggleCart: (cartStatus) => dispatch(toggleCart(cartStatus)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
