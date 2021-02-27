import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../Layout';

const Router = ({ routes }) => {
  const mainAppRoutes = routes.filter(({ layout }) => layout === 'default');

  return (
    <Switch>
      <Route exact path={mainAppRoutes.map(({ path }) => path).flat()}>
        <Layout>
          <Switch>
            {mainAppRoutes.map(({ path, exact, component: Component }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={props => <Component {...props} />}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
};

Router.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Router;
