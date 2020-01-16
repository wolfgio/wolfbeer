import React from 'react';

import BeerIcon from '../../assets/beer.png';
import {
  HeaderContainer,
  HeaderContent,
  Icon,
  TitleContainer,
} from './styles';

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Icon src={BeerIcon} />
      <TitleContainer>
        <h1>Wolfbeer</h1>
        <small>Delivery</small>
      </TitleContainer>
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
