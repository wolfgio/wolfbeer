import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  padding: 16px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  align-self: center;
`;

export const ChangeAddressButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  outline: none;
  font-size 0.850rem;
  text-decoration: underline;
  
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const LocationIcon = styled.img`
  height: 16px;
  margin-right: 8px;
`;
