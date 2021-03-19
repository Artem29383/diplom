import { connectRouter } from 'connected-react-router';

import appReducer from './users/slice';

export const createRootReducer = history => ({
  router: connectRouter(history),
  app: appReducer,
});
