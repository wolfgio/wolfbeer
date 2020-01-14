import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import Layout from './components/layout/layout';
import GlobalStyle from './style';
import Home from './pages/home/home';

const Main = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Home />
    </Layout>
  </>
);

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
