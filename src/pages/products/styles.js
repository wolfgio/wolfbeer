import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  padding: 32px 16px 120px;
  max-width: 1200px;
  margin: 0 auto;
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

export const CardGrid = styled.div`
  width: 100%;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.2);

  width: 100%;
  max-width: 320px;

  &::placeholder {
    opacity: 0.8;
  }
`;

export const CategorySelect = styled.select`
  width: 100%;
  max-width: 320px;
  margin-bottom: 16px;
`;
