import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useState, useEffect } from "react";
import ProductsComponent from "./components/ProductsComponent";

function ProductPage({ products, onLoadProducts }) {
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    onLoadProducts();
  }, []);

  const toggleCart = () => {
    setCartModal(!cartModal);
  };

  return (
    <div className="App">
      <Navbar openCart={toggleCart} />
      <ProductsComponent products={products} />
      <Footer />
      <CartModal state={cartModal} onClick={toggleCart} />
    </div>
  );
}

export default ProductPage;
