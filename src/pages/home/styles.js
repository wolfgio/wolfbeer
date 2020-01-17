import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
`;

export const ErrorContainer = styled.div`
  padding: 16px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  background-color: #e57373;
  margin-bottom: 16px;
  h4 {
    margin: 0;
    color: #FFF;
  }
`;
