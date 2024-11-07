import { ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'

import AppBar from './components/AppBar/AppBar'
import PageContainer from './components/PageContainer/PageContainer'
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ThemeProvider>
  )
}

export default App
