import styled, { keyframes } from 'styled-components';

export const WallContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled.img`
  height: 80px;
  animation: ${rotate} 2s linear infinite;
`;
