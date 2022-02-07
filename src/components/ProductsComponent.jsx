import React from "react";
import Product from "./Product";

const ProductsComponent = ({ products, onAdd }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
