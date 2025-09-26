import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AppConetxtProvider from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <AppConetxtProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppConetxtProvider>
);
