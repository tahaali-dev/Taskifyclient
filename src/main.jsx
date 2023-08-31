import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// ----------------ReduxStore--------------
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./ReduxSlices/Log-reg.js";
import { Studentreducer } from "./ReduxSlices/studentData.js";
//Combine Reducers-----------------------------------------
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  app: appReducer,
  reducer: Studentreducer,
  // Studentreducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// ---------------------------------------
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools initialOpen={false} />
  </QueryClientProvider>
);
