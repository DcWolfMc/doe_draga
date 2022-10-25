import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { CartContextProvider } from "./context/CartContext";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
      <Router />
      <GlobalStyle />
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
