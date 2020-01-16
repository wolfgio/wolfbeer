import styled from 'styled-components';

export const BoxContainer = styled.div`
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 680px;
  margin: 0 16px;
  display: flex;
`;

export const Icon = styled.img`
  flex: 0 0 30px;
  height: 30px;
`;

export const SearchInput = styled.input`
  flex: 1 1 100%;
  font-size: 2rem;
  color: #333;
  background-color: transparent;
  border: none;
  outline: none;
  margin-left: 8px;
  font-weight: 300;
  &::placeholder {
    opacity: 0.8;
  }
`;
