import React from "react";
import ReactDOM from "react-dom";
import RouteSwitch from "./RouteSwitch";
import store from "./store/store";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteSwitch />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
