import { Outlet } from 'react-router-dom'

import ButtonAppBar from './components/AppBar'

function App() {
  return (
    <>
      <ButtonAppBar />
      <Outlet />
    </>
  )
}

export default App
