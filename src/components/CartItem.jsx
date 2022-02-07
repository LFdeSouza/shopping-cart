import React from "react";

const CartItem = ({
  id,
  title,
  image,
  price,
  quantity,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-4 bg-light d-flex flex-column align-items-center justify-content-center">
          <img src={image} alt={title} className="cart-item-img img-fluid" />
        </div>
        <div className="col-8">
          <div className="card-body text-center">
            <h5 className="cart-title">{title}</h5>
            <p className="cart-price">${price * quantity}</p>
          </div>
          <div className="cart-product-quantity">
            <button onClick={() => onDecrement(id, quantity)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => onIncrement(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
