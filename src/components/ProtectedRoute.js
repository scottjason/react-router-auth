import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [state, setState] = React.useState({
    isLoaded: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    const makeReq = async () => {
      try {
        await axios.get('https://httpstat.us/401');
        setState({ isLoaded: true, isAuthenticated: true });
      } catch (err) {
        setState({ isLoaded: true, isAuthenticated: false });
      }
    };
    makeReq();
  }, []);

  const { isLoaded, isAuthenticated } = state;
  if (isLoaded && isAuthenticated) {
    return (
      <Route {...rest} render={props => <Component {...rest} {...props} />} />
    );
  } else if (isLoaded && !isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location },
        }}
      />
    );
  } else {
    return null;
  }
};

export default ProtectedRoute;
