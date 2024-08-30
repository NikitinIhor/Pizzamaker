import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Modal from "react-modal";
Modal.setAppElement("#root");
import App from "./App.jsx";

import "modern-normalize";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
