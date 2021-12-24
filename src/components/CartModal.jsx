import React from "react";

function CartModal({ onClick, state }) {
  return (
    <div>
      <div
        className={state ? "cart-overlay active" : "cart-overlay"}
        onClick={onClick}
      ></div>
      <div className={state ? "side-menu active" : "side-menu"}>
        <h2>Your shopping cart!</h2>
        <p>Total: $0.00</p>
        <button className="btn-side-menu checkout">checkout</button>
        <button className="btn-side-menu close" onClick={onClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;
