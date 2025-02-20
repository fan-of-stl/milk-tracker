import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MilkProvider } from "./context/MilkContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MilkProvider>
      <App />
    </MilkProvider>
  </StrictMode>
);
