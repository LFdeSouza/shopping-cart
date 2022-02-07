import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
      <Footer />
      <CartModal />
    </BrowserRouter>
  );
};

export default RouteSwitch;
