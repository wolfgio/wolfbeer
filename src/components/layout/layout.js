import React from 'react';
import Footer from '../footer/footer';

import { Container, Content } from './styles';
import Header from '../header/header';

const Layout = (props) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </Container>
  );
};

export default Layout;
