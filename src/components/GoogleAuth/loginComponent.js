import React from 'react';
import {
  Button,
  withStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useGoogleAuth } from './GoogleAuthProvider';
import AfterSignInComponent from './components/afterSignInComponent';
import globalData from '../../bento/siteWideConfig';

const styles = () => ({
  logotype: {
    whiteSpace: 'nowrap',
    color: '#FFF',
    fontFamily: 'Raleway',
    fontSize: '13px',
    letterSpacing: '1.25px',
    fontWeight: '800',
    '&:hover, &focus': {
      borderRadius: '0',
    },
  },
  buttonRootNoRightPadding: {
    padding: '9px 0 0 20px',
  },
});

const IndexPage = ({ classes }) => {
  const {
    signIn, signOut,
  } = useGoogleAuth();
  // const classes = useStyles();
  const userName = useSelector((state) => state.login.userId);
  const isSignedIn = useSelector((state) => state.login.isSignedIn);

  return (
    <>
      {/* eslint-disable no-console */}
      {console.group('%cThe following data is required by the auth system', 'background:aquamarine; color:#fff;')}
      {console.log(`EnableAuthentication: ${globalData.enableAuthentication}`)}
      {console.log(`AuthEndPoint: ${globalData.authEndPoint}`)}
      {console.groupEnd()}
      {globalData.enableAuthentication && (typeof globalData.authEndPoint === 'undefined' || globalData.authEndPoint.includes('google') || globalData.authEndPoint.includes('Google') || globalData.authEndPoint === []) && (
        <>
          {(isSignedIn && userName !== undefined && typeof userName !== 'undefined') ? (
            <>
              <AfterSignInComponent userName={userName} signoutLink={signOut} />
            </>
          ) : (
            <Button
              onClick={() => signIn()}
              classes={{ label: classes.logotype, text: classes.buttonRootNoRightPadding }}
            >
              Login
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default withStyles(styles)(IndexPage);
