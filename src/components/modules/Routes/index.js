import React from 'react';
import _ from 'lodash';
import {Switch, Route, Redirect} from 'react-router';
import routes from '../../../routes';
import queryString from 'query-string';

const Routes = props => (
  <Switch>
    {_.map(routes, (route, index) => {
      const {component: Component, path} = route;

      return (
        <Route
          key={index}
          path={path}
          render={routeProps => (
            <Component
              {...routeProps}
              {...props}
              urlQuery={queryString.parse(routeProps.location.search)}
            />
          )}
          exact
        />
      );
    })}
    <Redirect to='/cart'/>
  </Switch>
);

export default Routes;
