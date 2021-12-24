import C from "./constants";

const filterProducts = (products) =>
  products.filter(
    (product) =>
      product.category === "women's clothing" ||
      product.category === "men's clothing"
  );

export const fetchProducts = () => (dispatch) => {
  console.log("fetching");
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => filterProducts(products))
    .then((products) => dispatch({ type: C.FETCH_PRODUCTS, products }))
    .catch((err) => console.log(err));
};
