import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 6px 2px ${(props) => props.theme.colors.blue};
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    color: ${(props) => props.theme.colors.text};
  }

  body, input, button, textarea {
    font: 400 1rem ${(props) => props.theme.typography.family.default};
  }
`
