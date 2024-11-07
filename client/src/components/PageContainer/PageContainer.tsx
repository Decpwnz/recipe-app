import * as React from 'react'

import CssBaseline from '@mui/material/CssBaseline'

import { ContentBox, StyledContainer } from './PageContainer.styles'
import { PageContainerProps } from '../../types/PageContainerProps'

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <StyledContainer maxWidth="xl">
        <ContentBox>{children}</ContentBox>
      </StyledContainer>
    </React.Fragment>
  )
}
