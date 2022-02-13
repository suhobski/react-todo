import { BrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import "./styles/fonts.css";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter basename="/react-test">
      <GlobalStyle />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
