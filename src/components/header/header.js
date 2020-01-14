import React from 'react';

import BeerIcon from '../../assets/beer.png';
import { HeaderContainer, Icon, TitleContainer } from './styles';

const Header = () => (
  <HeaderContainer>
    <Icon src={BeerIcon} />
    <TitleContainer>
      <h1>Wolfbeer</h1>
      <small>Delivery</small>
    </TitleContainer>
  </HeaderContainer>
);

export default Header;
