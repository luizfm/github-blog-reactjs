import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/default-layout'
import Home from './pages/home'
import PostDetails from './pages/post-details'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:issueNumber" element={<PostDetails />} />
      </Route>
    </Routes>
  )
}

export default Router
