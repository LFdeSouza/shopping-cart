import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useState, useEffect } from "react";
import printProducts from "./functionality/products";
import ProductsComponent from "./components/ProductsComponent";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cartModal, setCartModal] = useState(false);

  const createProduct = (products) =>
    products.map((product) => ({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
    }));

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => createProduct(json))
      .then((products) => setProducts(products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleCart = () => {
    setCartModal(!cartModal);
  };

  return (
    <div className="App">
      <Navbar openCart={toggleCart} printProducts={printProducts} />
      <ProductsComponent products={products} />
      <Footer />
      <CartModal state={cartModal} onClick={toggleCart} />
    </div>
  );
}

export default ProductPage;
