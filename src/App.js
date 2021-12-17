import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useState } from "react";
import printProducts from "./functionality/products";

function App() {
  const [cartModal, setCartModal] = useState(false);

  const toggleCart = () => {
    setCartModal(!cartModal);
  };

  return (
    <div className="App">
      <Navbar openCart={toggleCart} printProducts={printProducts} />
      <Hero />
      <Footer />
      <CartModal state={cartModal} onClick={toggleCart} />
    </div>
  );
}

export default App;
