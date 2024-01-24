import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HoroscopeContext } from "./context/HoroscopeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HoroscopeContext.Provider  value={{ sign: "Leo" }}>
      <App />
    </HoroscopeContext.Provider>
  </React.StrictMode>
);
