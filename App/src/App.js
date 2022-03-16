import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightMode } from "./assets/theme";
import Home from "./components/Home";
import store from "./store";

const App = () => (
  <Provider store={store} >
    <ThemeProvider theme={lightMode}>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;