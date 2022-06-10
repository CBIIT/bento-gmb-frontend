import Google from '../assets/login/google.png';
import LoginGov from '../assets/login/login.gov.png';
import NihItrust from '../assets/login/nih_itrust.png';

export const loginProvidersData = {
  google: {
    name: 'google',
    icon: Google,
    loginButtonText: 'Sign in with Google',
    enabled: true,
  },
  loginGov: {
    name: 'loginGov',
    icon: LoginGov,
    loginButtonText: 'Sign in Login.gov',
    enabled: false,
  },
  'NIH Login': {
    name: 'NIH Login',
    icon: NihItrust,
    loginButtonText: 'Sign in NIH iTrust',
    enabled: false,
  },
};

export const RegistrationConfigs = {
  enabled: false,
};

export const loginGovCreateAccountURL = 'https://www.login.gov/create-an-account/';

export const bentoHelpEmail = 'bento-help@nih.gov';

export default null;
