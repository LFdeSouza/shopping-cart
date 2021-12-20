import React from "react";
import Product from "./Product";

const ProductsComponent = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsComponent;
