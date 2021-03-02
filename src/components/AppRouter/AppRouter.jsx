import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import Layout from '../Layout';
import AppRoute from "./AppRoute";

const Router = ({ routes }) => {

  return (
    <Layout>
      <Switch>
        {routes.map(({ path, ...rest }) => (
          <AppRoute
            key={path}
            path={path}
            {...rest}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

Router.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Router;
