import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// ----------------ReduxStore--------------
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./ReduxSlices/Log-reg.js";

const store = configureStore({
  reducer: appReducer,
});

// ---------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
