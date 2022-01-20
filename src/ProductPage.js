import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Cart } from "./store/containers";
import { useEffect } from "react";
import ProductsComponent from "./components/ProductsComponent";

function ProductPage({
  products,
  cart,
  onLoadProducts,
  onAddItem,
  onToggleCart,
}) {
  useEffect(() => {
    onLoadProducts();
  }, []);

  return (
    <div className="App">
      <Navbar openCart={onToggleCart} />
      <ProductsComponent products={products} onAdd={onAddItem} />
      <Footer />
      <Cart cart={cart} />
    </div>
  );
}

export default ProductPage;
