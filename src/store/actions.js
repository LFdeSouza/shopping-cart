import C from "./constants";

// Products Actions
const filterProducts = (products) =>
  products.filter(
    (product) =>
      product.category === "women's clothing" ||
      product.category === "men's clothing"
  );

export const fetchProducts = () => (dispatch) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => filterProducts(products))
    .then((products) => dispatch({ type: C.FETCH_PRODUCTS, products }))
    .catch((err) => console.log(err));
};

//Cart Actions
export const addItemToCart = (product) => ({
  type: C.ADD_PRODUCT,
  product,
});

export const incrementQuantity = (target) => ({
  type: C.INCREMENT_QUANTITY,
  target,
});

export const decrementQuantity = (target, quantity) => ({
  type: C.DECREMENT_QUANTITY,
  target,
  quantity: quantity,
});

//Cart Modal Actions
export const toggleCart = (cartStatus) => {
  return {
    type: C.TOGGLE_CART,
    cartStatus: !cartStatus,
  };
};
