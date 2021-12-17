import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductPage from "./ProductPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
