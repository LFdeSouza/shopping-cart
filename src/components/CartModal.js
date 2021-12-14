import React from "react";

function CartModal({ onClick }) {
  return (
    <div className="cart-overlay">
      <div className="side-menu dropdown-menu">
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
