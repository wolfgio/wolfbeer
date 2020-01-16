import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Container } from './styles';

const LoadingCard = () => (
  <Container>
    <Skeleton count={1} height={280} />
  </Container>
);

export default LoadingCard;
