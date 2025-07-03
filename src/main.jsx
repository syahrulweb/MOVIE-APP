// Import React dan ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Import App
import App from "./App";
// Import BrowserRouter dari React Router
import { BrowserRouter } from "react-router-dom";

/**
 * Wrap App dengan BrowserRouter.
 * Agar URL dapat dikontrol oleh React Router.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
