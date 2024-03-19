import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "49em", // ~768px
  lg: "65em", // ~  1024px
  xl: "91em", // ~1280px
  "2xl": "160em", // ~1536px
};

const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      100: "#000000",
      200: "#FFFFFF",
      300: "#c7dae0",
      400: "#005d8f",
      500: "#E0E0DE",
      600: "#96157c",
      700: "#e8e8e8",
      800: "#000000",
      900: "#000000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraBaseProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ChakraBaseProvider>
);
