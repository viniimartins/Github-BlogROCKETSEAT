import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Context } from "./context";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Context>
          <Router />
        </Context>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
