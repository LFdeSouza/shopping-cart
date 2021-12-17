import React from "react";

const ProductsComponent = ({ product }) => {
  return (
    <div className="products-container">
      <div className="product">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <p className="product-title">{product.title}</p>
      </div>
    </div>
  );
};

export default ProductsComponent;
