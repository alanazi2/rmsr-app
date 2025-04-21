import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // استيراد App من ملف App.tsx
import "./index.css";
import "./App.css";
import "./i18n";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
