import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

import usersReducer from './users/slice';

import usersSagas from './users/sagas';

export const createRootReducer = history => ({
  router: connectRouter(history),
  users: usersReducer,
});

// eslint-disable-next-line func-names
export const rootSaga = function*() {
  yield all([usersSagas()]);
};
