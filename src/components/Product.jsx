import React from "react";

const Product = ({ image, title, price, id, onAdd }) => {
  return (
    <div className="col-md-4 mb-5">
      <div
        className="card card-product d-flex flex-column align-items-center border-light m-auto text-center "
        id={id}
      >
        <img src={image} alt={title} className=" product-image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => onAdd({ id, title, image, price })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
