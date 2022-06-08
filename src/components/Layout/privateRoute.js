import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import globalData from '../../bento/siteWideConfig';

export function afterLoginRedirect(historyObject, path) {
  historyObject.push(path);
}

export function LoginRoute({ component: ChildComponent, ...rest }) {
  const { enableAuthentication } = globalData;
  const isSignedIn = useSelector((state) => state.login.isSignedIn);
  return (
    <Route render={(props) => {
      if (enableAuthentication && isSignedIn) {
        return <Redirect to="/" />;
      }
      return <ChildComponent {...props} match={rest.computedMatch} {...rest} />;
    }}
    />
  );
}

function PrivateRoute({ component: ChildComponent, ...rest }) {
  const { enableAuthentication } = globalData;
  const isSignedIn = useSelector((state) => state.login.isSignedIn);
  return (
    <Route render={(props) => {
      if (enableAuthentication && !isSignedIn) {
        return <Redirect to="/login" />;
      }
      return <ChildComponent {...props} match={rest.computedMatch} {...rest} />;
    }}
    />
  );
}

export default PrivateRoute;
