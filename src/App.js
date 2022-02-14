import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import { store } from "./redux/store";
import "./styles/fonts.css";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter basename="/react-test">
        <GlobalStyle />
        <AppLayout />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
