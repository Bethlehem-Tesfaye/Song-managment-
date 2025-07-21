import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { useSelector } from "react-redux";

const ThemeWrap = () => {
  const { currentTheme } = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeWrap />
  </Provider>
);
