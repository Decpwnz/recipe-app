import * as React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import { PageContainerProps } from '../types/PageContainerProps'

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box>{children}</Box>
      </Container>
    </React.Fragment>
  )
}
