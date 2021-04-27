import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Redirect } from 'react-router-dom';
import Layout from '../Layout';
import AppRoute from "./AppRoute";
import GoogleAnalytics  from "../../hooks/useGoogleAnalytics";

const Router = ({ routes }) => {

  return (
    <Layout>
      <GoogleAnalytics />
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
