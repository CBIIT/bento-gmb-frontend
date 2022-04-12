import store from '../../../store';

const storeKey = 'login';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('username');
    if (serializedState === null) {
      return {
        isSignedIn: false,
        userId: null,
      };
    }

    return {
      isSignedIn: true,
      userId: serializedState,
    };
  } catch (ex) {
    return {
      isSignedIn: false,
      userId: null,
    };
  }
};

const initialState = loadState();

export const signInRed = (userId = null) => store.dispatch({ type: SIGN_IN, payload: userId });

export const signOutRed = (userId = null) => store.dispatch({ type: SIGN_OUT, payload: userId });

const reducers = {
  SIGN_IN: (state, item) => ({ ...state, isSignedIn: true, userId: item }),
  SIGN_OUT: (state) => ({
    ...state,
    isSignedIn: false,
    userId: null,
  }),
};

store.injectReducer(storeKey,
  (state = initialState, { type, payload }) => (reducers[type]
    ? reducers[type](state, payload) : state));
