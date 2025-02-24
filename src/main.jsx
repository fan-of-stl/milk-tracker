import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MilkProvider } from "./context/MilkContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MilkProvider>
        <App />
      </MilkProvider>
    </BrowserRouter>
  </StrictMode>
);
