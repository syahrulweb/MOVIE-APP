// styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

/**
 * GlobalStyle:
 * - CSS Reset
 * - Font Global
 * - Bisa pindahkan isi index.css ke sini
 */
const GlobalStyle = createGlobalStyle`


  /* Reset dan Global Base Style */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #ffffff;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
