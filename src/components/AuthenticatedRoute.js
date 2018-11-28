import React from 'react';
import { Route, Redirect } from "react-router-dom";

import userStore from '../stores/users';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        userStore.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={"/login?redirect=" + props.location.pathname}
          />
        )
      }
    />
  );
}

export default AuthenticatedRoute;