import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouteSwitch from "./RouteSwitch";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteSwitch />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
