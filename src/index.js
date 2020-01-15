import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';

import Layout from './components/layout/layout';
import GlobalStyle from './style';
import Home from './pages/home/home';

import { history } from './lib/utils';

const Main = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Layout>
  </>
);

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
