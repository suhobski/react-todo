import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import AppLayout from './pages/AppLayout/AppLayout';

import './styles/fonts.css';
import GlobalStyle from './styles/globalStyles';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const unsubscribeFromAuth = null;

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <AppLayout currentUser={currentUser} />
        </BrowserRouter>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;
