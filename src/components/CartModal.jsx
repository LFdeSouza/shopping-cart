import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import {
  toggleCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/actions";

function CartModal({
  cartModal,
  onToggleCart,
  cart = [],
  onIncrement,
  onDecrement,
}) {
  const total = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <div
        className={cartModal ? "cart-overlay active" : "cart-overlay"}
        onClick={onToggleCart}
      ></div>
      <div className={cartModal ? "side-menu active" : "side-menu"}>
        <h1>Your shopping cart!</h1>
        <div className="cart-products-container">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ))}
        </div>
        <p>{`Total: $${parseFloat(total()).toFixed(2)}`}</p>
        <button className="btn btn-primary w-75">checkout</button>
        <button
          className="btn btn-primary w-75"
          onClick={(cartModal) => onToggleCart(cartModal)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

// export default CartModal;
const mapStateToProps = (state) => ({
  cart: state.cart,
  cartModal: state.cartModal,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleCart: () => dispatch(toggleCart()),
  onIncrement: (id) => dispatch(incrementQuantity(id)),
  onDecrement: (id, quantity) => dispatch(decrementQuantity(id, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
