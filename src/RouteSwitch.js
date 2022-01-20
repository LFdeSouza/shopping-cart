import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { ProductsContainer } from "./store/containers";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
