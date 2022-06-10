import React, { useState } from 'react';
import {
  Button,
  withStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { useGoogleAuth } from './GoogleAuthProvider';
import AfterSignInComponent from './components/afterSignInComponent';
import globalData from '../../bento/siteWideConfig';

// styles
const styles = () => ({

  logotype: {
    whiteSpace: 'nowrap',
    color: '#FFFFFF',
    fontFamily: 'Raleway',
    fontSize: '13px',
    letterSpacing: '1.25px',
    fontWeight: '800',
    '&:hover, &:focus': {
      borderRadius: '0',
    },
  },
  buttonRootNoRightPadding: {
    padding: '9px 0px 0px 20px',
  },
});

const IndexPage = ({ classes }) => {
  const {
    signIn, signOut,
  } = useGoogleAuth();
  // const classes = useStyles();
  const userName = useSelector((state) => state.login.userId);
  const isSignedIn = useSelector((state) => state.login.isSignedIn);

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    message: '',
  });

  const signInError = (errorMessage) => {
    setSnackbarState({ ...snackbarState, open: true, message: errorMessage });
  };

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const {
    vertical, horizontal, open, message,
  } = snackbarState;

  return (
    <>
      {globalData.enableAuthentication && (typeof globalData.authEndPoint === 'undefined' || globalData.authEndPoint.includes('google') || globalData.authEndPoint.includes('Google') || globalData.authEndPoint === []) && (
      <>
        { (isSignedIn && userName !== undefined && typeof userName !== 'undefined') ? (
          <>
            <AfterSignInComponent userName={userName} signoutLink={signOut} />
          </>
        ) : (
          <>
            <Button
              onClick={() => signIn(() => {}, signInError)}
              classes={{ label: classes.logotype, text: classes.buttonRootNoRightPadding }}
            >
              Login
            </Button>
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              message={message}
              key={vertical + horizontal}
              onClose={handleClose}
              autoHideDuration={3000}
            />
          </>
        )}
      </>
      )}
    </>
  );
};

export default withStyles(styles)(IndexPage);
