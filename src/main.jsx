import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./store/Store.jsx";
import "./index.css";
import MyRouter from "./router/MyRouter.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </Provider>
);
