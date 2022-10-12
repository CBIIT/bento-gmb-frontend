export default {
  // Suggested for replaceEmptyValueWith: 'N/A' or '-' or ''
  replaceEmptyValueWith: '',
  // Enable authenication
  enableAuthentication: true,
  // List for options for authentication empty array defaults to google
  authEndPoint: ['google'], // authEndPoint: []
  authProviders: ['google', 'nih', 'loginGov'], // authEndPoint: []
};

export const loginRoute = '/login';
export const requestAccessRoute = '/request';
export const adminPortal = '/admin';
export const userProfileRoute = '/profile';

// Public Level Access
export const PUBLIC_ACCESS = 'None';

// Node level access
export const NODE_LEVEL_ACCESS = false;
export const NODE_LABEL = 'Study Arm(s)';
