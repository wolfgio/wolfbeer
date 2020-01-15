import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import 'normalize.css';

import Layout from './components/layout/layout';
import GlobalStyle from './style';
import Home from './pages/home/home';

import { history, client } from './lib/utils';

const Main = () => (
  <>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <Layout>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ApolloProvider>
  </>
);

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
