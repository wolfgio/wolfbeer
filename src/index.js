import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import 'normalize.css';

import GlobalStyle from './style';

import Layout from './components/layout/layout';
import Home from './pages/home/home';
import Products from './pages/products/products';

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
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ApolloProvider>
  </>
);

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
