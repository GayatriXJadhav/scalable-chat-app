import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PrimeReactProvider value={{ ripple: true }}>
            <App />
        </PrimeReactProvider>
    </StrictMode>
);
