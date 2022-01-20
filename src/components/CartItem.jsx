import React from "react";

const CartItem = ({
  id,
  title,
  image,
  price,
  quantity,
  onDecrement,
  onIncrement,
}) => (
  <div className="cart-item">
    <div className="cart-product-description">
      <img src={image} alt={title} />
      <div className="cart-product-title">
        <p className="cart-title">{title}</p>
        <p className="cart-price">${price * quantity}</p>
      </div>
    </div>
    <div className="cart-product-quantity">
      <button onClick={() => onDecrement(id, quantity)}>-</button>
      <p>{quantity}</p>
      <button onClick={() => onIncrement(id)}>+</button>
    </div>
  </div>
);

export default CartItem;
