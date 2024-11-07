import { Outlet } from 'react-router-dom'

import AppBar from './components/AppBar'
import PageContainer from './components/PageContainer'

function App() {
  return (
    <>
      <AppBar />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </>
  )
}

export default App
