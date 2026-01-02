import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* Analytics diletakkan di luar App namun tetap di dalam Provider StrictMode */}
    <Analytics />
  </React.StrictMode>
);
