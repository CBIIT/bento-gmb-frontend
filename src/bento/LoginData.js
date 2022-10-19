import LoginGov from '../assets/login/login.gov.png';
import NihItrust from '../assets/login/nih_itrust.png';

export const loginProvidersData = {
  /* google: {
    name: 'google',
    icon: Google,
    loginButtonText: 'Sign in with Google',
    enabled: false,
  }, */
  loginGov: {
    name: 'loginGov',
    icon: LoginGov,
    loginButtonText: 'Sign in Login.gov',
    enabled: true,
  },
  'NIH Login': {
    name: 'NIH Login',
    icon: NihItrust,
    loginButtonText: 'Sign in NIH iTrust',
    enabled: true,
  },
};

export const RegistrationConfigs = {
  enabled: false,
};

export const loginGovCreateAccountURL = 'https://www.login.gov/create-an-account/';

export const bentoHelpEmail = 'bento-help@nih.gov';

export default null;
