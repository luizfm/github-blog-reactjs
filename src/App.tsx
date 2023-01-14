import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Card from './components/card'
import Input from './components/input'
import Link from './components/link'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <HashRouter>
        <h1>Hello World</h1>
        <Input id="x" label="teste" placeholder="teste" />
        <Link to="/">aasioejsaio aosiejaoijoais oi ajseioa</Link>
        <Card
          id="1"
          title="JavaScript data types and data structures"
          updatedAt="2023-01-14T02:51:18.931Z"
          resume="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in "
        />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
