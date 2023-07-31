import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
    padding:0;
    margin:0; 
  }
  html,body,#root{height:100%}
  html{
    font-size:10px;
    user-select:none;
  }
  body {
    font-size:1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:2.5rem;
  }
  ul{
    list-style-type:none
  }
`;

