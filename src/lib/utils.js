import { createBrowserHistory } from 'history';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: 'https://api.code-challenge.ze.delivery/public/graphql',
});

export const history = createBrowserHistory();
