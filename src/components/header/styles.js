import styled from 'styled-components';

export const HeaderContainer = styled.header`
  box-shadow: 1px 4px 5px 1px rgba(0,0,0,0.2);
  padding: 16px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Icon = styled.img`
  height: 40px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  margin-left: 8px;

  h1 {
    font-size: 1.4rem;
  }
`;
