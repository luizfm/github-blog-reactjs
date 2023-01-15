import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Router from './router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
