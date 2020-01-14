import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: #FAFAFA;
    color: #333;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  }

  a {
    color: #333;
    font-weight: 700;
    text-decoration: none;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`;
