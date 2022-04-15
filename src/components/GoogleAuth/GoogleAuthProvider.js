import React, { useContext } from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
import env from '../../utils/env';
import { signInRed, signOutRed } from './state/loginReducer';

const AUTH_API = env.REACT_APP_AUTH_API;
const GOOGLE_CLIENT_ID = env.REACT_APP_GOOGLE_CLIENT_ID;

const createContext = () => {
  const context = React.createContext();

  const useCtx = () => {
    const contextValue = useContext(context);

    if (contextValue === undefined || typeof contextValue === 'undefined') {
      throw new Error('useCtx must be inside a provider with a value');
    }

    return contextValue;
  };

  return [useCtx, context.Provider];
};

const [useGoogleAuth, AuthProvider] = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const {
    googleUser,
    isInitialized,
    grantOfflineAccess,
    signOut,
    isSignedIn,
  } = useGoogleLogin({
    clientId: GOOGLE_CLIENT_ID,
  });

  const onSignInClick = () => {
    grantOfflineAccess().then((resp) => {
      if (resp) {
        (async () => {
          const rawResponse = await fetch(`${AUTH_API}/api/auth/login`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: resp }),
          }).then((response) => response.json).catch(() => {
            /* possible error here, need a way to catch and parse the errors. */
          });

          if (!rawResponse) return;

          const content = await rawResponse;
          localStorage.setItem('username', content.name);
          signInRed(content.name);
        })();
      }
      // add else block to track any errors
    }).catch(() => {
    });

    // wonder what this is about (this.auth.signIn())
  };

  const onSignOut = () => {
    (async () => {
      localStorage.removeItem('username');
      signOutRed();
      await fetch(`${AUTH_API}/api/auth/logout`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(signOut, signOut);
    })();
  };

  return (
    <AuthProvider
      value={{
        signIn: onSignInClick,
        isSignedIn,
        isInitialized,
        googleUser,
        signOut: onSignOut,
      }}
    >
      {children}
    </AuthProvider>
  );
};

export { useGoogleAuth };
