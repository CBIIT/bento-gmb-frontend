import React, { useState, useEffect } from 'react';
import { Grid, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory, useLocation } from 'react-router-dom';
// import LockIcon from '@material-ui/icons/Lock';
import Snackbar from '@material-ui/core/Snackbar';
import {
  loginProvidersData,
  loginGovCreateAccountURL,
  bentoHelpEmail,
  RegistrationConfigs,
} from '../../../bento/LoginData';
import { useGoogleAuth } from '../../../components/GoogleAuth/GoogleAuthProvider';
import { afterLoginRedirect } from '../../../components/Layout/privateRoute';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function getRedirectPath(query) {
  const path = query.get('redirect') || '/';
  return path;
}

function loginView(props) {
  const { classes } = props;
  const { signIn } = useGoogleAuth();
  const history = useHistory();
  const query = useQuery();
  const redirectPath = getRedirectPath(query);
  const redirectMessage = `Please sign in to access ${redirectPath}`;

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    message: '',
  });

  const {
    vertical, horizontal, open, message,
  } = snackbarState;

  // Functions
  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const signInError = (errorMessage) => {
    setSnackbarState({ ...snackbarState, open: true, message: errorMessage });
  };

  const signInSuccess = () => afterLoginRedirect(history, redirectPath);

  useEffect(() => {
    if (redirectPath) setSnackbarState({ ...snackbarState, open: true, message: redirectMessage });
  }, []);

  return (
    <div className={classes.Container}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
        autoHideDuration={3000}
      />
      {/* ROW 1 */}
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        {/* Top Space */}
        <Grid container item justifyContent="center" className={classes.emptySpace} />

        {/* ROW 2 */}
        <Grid container item justifyContent="center">
          <Grid container spacing={1}>
            {/* Spacing */}
            <Grid container item sm={4} />

            {/* Login Box */}
            <Grid container item sm={4} justifyContent="center" className={[classes.Box, classes.LoginBox]}>
              {/* <Grid container item xs={12} justifyContent="center">
                <LockIcon size="large" alt="alt coming" />
              </Grid> */}

              <div className={classes.LoginBoxTitle}>
                Log in with either of these Identity providers:
              </div>
              <Grid container item xs={12} justifyContent="center" className={classes.LoginButtonGroup}>

                {Object.values(loginProvidersData).map((provider) => (provider.enabled
                  ? (
                    <Button
                      variant="outlined"
                      className={[classes.LoginButton, classes.Color_092E50]}
                      disableRipple
                      onClick={() => {
                        signIn(signInSuccess, signInError);
                      }}
                    >
                      <Grid container item xs={1} justifyContent="center">
                        <img src={provider.icon} className={classes.root} alt="alt coming" />
                      </Grid>
                      <Grid container item xs={11} justifyContent="center">
                        {provider.loginButtonText}
                      </Grid>
                    </Button>
                  )
                  : ''))}

                {loginProvidersData.loginGov && loginProvidersData.loginGov.enabled ? (
                  <Grid item xs={12} justifyContent="center" className={[classes.helperMessage, classes.createAccountMessage]}>
                    If you don't have a login.gov account, click
                    {' '}
                    <span className={classes.supportEmail}>
                      <a href={loginGovCreateAccountURL}>
                        here
                      </a>
                    </span>
                    {' '}
                    to sign up.
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
            {/* Spacing */}
            <Grid container item sm={4} />
          </Grid>
        </Grid>
      </Grid>

      {/* ROW 4 */}
      {RegistrationConfigs && RegistrationConfigs.enabled ? (
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid container item justifyContent="center">
            <h3>OR</h3>
          </Grid>
          <Grid container item justifyContent="center">
            <Grid container spacing={1}>
              <Grid container item sm={4} />
              <Grid
                container
                item
                sm={4}
                justifyContent="center"
                direction="row"
                className={[classes.Box, classes.RegisterBox, classes.Color_092E50]}
              >
                <Grid container item xs={12} justifyContent="center">
                  <div className={classes.RegisterBoxTitle}>
                    Register and create a new account
                  </div>
                </Grid>
                <Grid container item xs={12} justifyContent="center">
                  <Button variant="contained" className={classes.registerButtton}>
                    REGISTER
                  </Button>
                </Grid>
                <Grid item xs={12} justifyContent="center" className={[classes.helperMessage, classes.registerHelpMessage]}>
                  If you have any questions about access or the registration process,
                  please contact
                  {' '}
                  <span className={classes.supportEmail}><a href={`mailto:${bentoHelpEmail}`}>{bentoHelpEmail}</a></span>
                </Grid>
              </Grid>
              <Grid container item sm={4} />
            </Grid>
          </Grid>
        </Grid>
      ) : ''}

      {/* Bottom Space */}
      <Grid container item justifyContent="center" className={classes.emptySpace} />

    </div>
  );
}

const styles = () => ({
  Container: {
    backgroundColor: '#FFFFFF',
    marginTop: '-47px',
    fontFamily: 'Nunito',
  },
  NoBold: {
    fontWeight: 'normal',
  },
  Box: {
    boxShadow: '-4px 8px 27px 4px rgba(27,28,28,0.09);',
    border: '#A9C8E3 2px solid',
    borderRadius: '10px',
    margin: '10px 0px',
    padding: '5px !important',
    backgroundColor: '#F2F6FA',
  },
  LoginBox: {
    // height: '150px',
  },
  LoginBoxTitle: {
    height: '16px',
    width: '350px',
    color: '#092E50',
    fontSize: '16px',
    letterSpacing: '0',
    lineHeight: '22px',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '25px',
  },
  LoginButtonGroup: {

  },
  LoginButton: {
    width: '350px',
    height: '35px',
    background: '#FFFFFF',
    boxShadow: 'none',
    border: '1px #B1B1B1 solid',
    marginBottom: '14px',
    justifyContent: 'left',
    textTransform: 'none',
  },
  helperMessage: {
    textAlign: 'center',
    width: '397px',
    color: '#323232',
    fontFamily: 'Nunito',
    fontSize: '14px',
    fontWeight: '300',
    letterSpacing: '0',
    lineHeight: '22px',
  },
  createAccountMessage: {
    marginTop: '4px',
    marginBottom: '18px',
  },
  RegisterBox: {
    justifyContent: 'center',
    paddingLeft: '50px !important',
    paddingRight: '50px !important',
  },
  RegisterBoxTitle: {
    height: '16px',
    width: '271px',
    color: '#092E50',
    fontFamily: 'Nunito',
    fontSize: '16px',
    letterSpacing: '0',
    lineHeight: '22px',
    textAlign: 'center',
    marginTop: '35px',
    marginBottom: '25px',
  },
  registerButtton: {
    height: '40px',
    color: '#FFFFFF',
    backgroundColor: '#5D53F6',
  },
  registerHelpMessage: {
    marginTop: '18px',
    marginBottom: '18px',
  },
  supportEmail: {
    display: 'inline !important',
    fontWeight: 'bold',
  },
  emptySpace: {
    height: '50px',
  },
  Color_092E50: {
    color: '#092E50 !important',
  },
});

export default withStyles(styles, { withTheme: true })(loginView);