import React, { useState } from 'react';

import BeerIcon from '../../assets/beer.png';

import {
  CardContainer,
  CardTitle,
  CardImage,
  CardButtonsWrapper,
  CardButton,
} from './styles';

const ProductCard = ({ product }) => {
  const [showIcon, setShowIcon] = useState(false);

  const handleImageError = () => setShowIcon(true);

  return (
    <CardContainer>
      <CardImage
        onError={handleImageError}
        src={!showIcon ? product.images[0].url : BeerIcon}
      />
      <CardTitle>{product.title}</CardTitle>
      <CardButtonsWrapper>
        <CardButton color="#f44336">Remover</CardButton>
        <CardButton color="#8bc34a">Adicionar</CardButton>
      </CardButtonsWrapper>
    </CardContainer>
  );
};

export default ProductCard;
