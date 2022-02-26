import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./assets/theme";
import Home from "./components/Home";

const App = () => (
  <ThemeProvider theme={lightMode}>
    <Normalize />
    <GlobalStyle />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;