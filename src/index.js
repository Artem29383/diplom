import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store';

const history = createBrowserHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
