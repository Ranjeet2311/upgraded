import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style/style.scss";
import { store } from "./store/store";
import "./i18n";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback="...loading">
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
