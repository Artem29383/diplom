import React from 'react';
import { render } from 'react-dom';
import configureApolloClient from './apolloClient';
import { ApolloProvider as ApolloHooks } from '@apollo/react-hooks';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);


const client = configureApolloClient();

render(
  <Provider store={store}>
    <ApolloHooks client={client}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
    </ApolloHooks>
  </Provider>,
  document.getElementById('root')
);
