import { Outlet } from 'react-router-dom'
import Header from '../../components/header'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </DefaultLayoutContainer>
  )
}

export default DefaultLayout
