import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${props =>props.theme["yellow-500"]};
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: ${props => props.theme["gray-100"]};
  color: ${props => props.theme["gray-700"]};
  -webkit-font-smoothing: antialiased;
}
body,
input,
textarea,
button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
a{
  text-decoration: none;
}

`;
