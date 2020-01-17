import React, { useState } from 'react';

import BeerIcon from '../../assets/beer.png';

import {
  CardContainer,
  CardTitle,
  CardPrice,
  CardImage,
  CardButtonsWrapper,
  CardButton,
} from './styles';
import { formatCurrency } from '../../lib/utils';

const ProductCard = ({
  product,
  isSelected,
  onAddProduct,
  onRemoveProduct,
}) => {
  const [showIcon, setShowIcon] = useState(false);

  const handleImageError = () => setShowIcon(true);
  const handleAdd = () => !isSelected && onAddProduct(product);
  const handleRemove = () => isSelected && onRemoveProduct(product.id);

  return (
    <CardContainer>
      <CardImage
        onError={handleImageError}
        src={!showIcon ? product.images[0].url : BeerIcon}
      />
      <CardTitle>
        {product.title}
      </CardTitle>
      <CardPrice>{formatCurrency(product.productVariants[0].price)}</CardPrice>
      <CardButtonsWrapper>
        <CardButton disabled={!isSelected} onClick={handleRemove} color="#f44336">Remover</CardButton>
        <CardButton disabled={isSelected} onClick={handleAdd} color="#8bc34a">Adicionar</CardButton>
      </CardButtonsWrapper>
    </CardContainer>
  );
};

export default ProductCard;
