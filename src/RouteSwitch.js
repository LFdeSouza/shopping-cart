import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
// import { ProductsContainer } from "./store/containers";
import ProductPage from "./ProductPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
