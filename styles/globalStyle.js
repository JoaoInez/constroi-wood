import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: ${({ theme }) => theme.white};
  }

  p {
    line-height: 1.4;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  textarea {
    font-family: inherit;
  }
`;

export default GlobalStyle;
