import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import AppLayout from './pages/AppLayout/AppLayout';
import store from './redux/store';
import './styles/fonts.css';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReduxProvider store={store}>
        <BrowserRouter basename="react-todo">
          <GlobalStyle />
          <AppLayout />
        </BrowserRouter>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;
