import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import { useState } from "react";

function App() {
  const [cartModal, setCartModal] = useState(false);

  const openCart = () => {
    console.log("clicked");
    setCartModal(true);
  };

  const closeOnClick = () => {
    setCartModal(false);
  };

  return (
    <div className="App">
      <Navbar openCart={openCart} />
      <Hero />
      <Footer />
      {cartModal ? <CartModal onClick={closeOnClick} /> : null}
    </div>
  );
}

export default App;
