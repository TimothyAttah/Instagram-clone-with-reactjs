import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* max-width: 1000px;
  width: 100%;
  margin: 0 auto; */
  border: 2px solid red;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
  list-style: none;
  li{
    padding: 0;
    margin: 0;
  }
}

a {
  text-decoration: none;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
}

input {
  outline: none;
}

`;
