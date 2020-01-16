import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 2px;
  background-color: #FFF;
  padding: 16px;
  height: 280px;
  position: relative;

  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const CardTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 800;
  margin: 16px 0;
  flex-grow: 1;
  display: flex;
  text-align: left;
`;

export const CardImage = styled.img`
  height: 50%;
  object-fit: contain;
`;

export const CardButtonsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8px;
`;

export const CardButton = styled.button`
  border: solid 1px ${(props) => props.color};
  border-radius: 20px;
  color: ${(props) => props.color};
  padding: 4px 8px;
  font-size: 0.7rem;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;
