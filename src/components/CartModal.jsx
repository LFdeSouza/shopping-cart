import React from "react";
import CartItem from "./CartItem";

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
        onClick={(cartModal) => onToggleCart(cartModal)}
      ></div>
      <div className={cartModal ? "side-menu active" : "side-menu"}>
        <h2>Your shopping cart!</h2>
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
        <button className="btn-side-menu checkout">checkout</button>
        <button
          className="btn-side-menu close"
          onClick={(cartModal) => onToggleCart(cartModal)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
