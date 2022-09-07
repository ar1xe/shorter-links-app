import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store/index";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
