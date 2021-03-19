import React from 'react';
import Helmet from "react-helmet";
import { Route } from "react-router-dom";

const AppRoute = ({ path, title, component: Component, ...rest }) => {
  return (
    <Route path={path} exact {...rest}>
      <Helmet title={title} />
      <Component />
    </Route>
  );
};

export default AppRoute;
