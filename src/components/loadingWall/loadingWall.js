import React from 'react';

import ReloadIcon from '../../assets/reload.png';

import { WallContainer, SpinnerIcon } from './styles';

const LoadingWall = ({ loading }) => loading && (
  <WallContainer>
    <SpinnerIcon src={ReloadIcon} />
  </WallContainer>
);

export default LoadingWall;
