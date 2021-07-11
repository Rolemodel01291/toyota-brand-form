import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFormSection } from '../../../state/ducks/user/actions';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { token, hydrating, formSection } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rest.path !== undefined && rest.path !== formSection) {
      setFormSection(rest.path, dispatch);
    }
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        hydrating || !!token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
