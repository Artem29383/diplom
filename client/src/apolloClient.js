import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-boost';
import fetch from 'node-fetch';
import { setContext } from '@apollo/client/link/context';

import { createHttpLink } from '@apollo/client';

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers,
  };
});

export default isServer => {
  // const API =
  //   'https://api-eu-central-1.graphcms.com/v2/cke879aakruy401xw4ymd135i/master';
  const API = 'https://api-eu-central-1.graphcms.com/v2/cklseprxijsng01yy6zkzaygc/master';
  const httpLink = createHttpLink({ uri: API, fetch: isServer ? fetch : null });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    ssrMode: isServer,
    ssrForceFetchDelay: !isServer ? 100 : null,
  });
};
