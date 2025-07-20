import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App.jsx";
import { theme } from "./styles/theme.js";

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
