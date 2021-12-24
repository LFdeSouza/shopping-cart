import React from "react";

const Product = ({ image, title, price, id }) => (
  <div className="product">
    <img className="product-image" src={image} alt={title} />
    <p className="product-title">{title}</p>
    <p className="product-title">{`$${price}`}</p>
    <button className="btn-product">Add to cart</button>
  </div>
);

export default Product;
