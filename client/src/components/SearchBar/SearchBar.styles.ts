import { Paper, PaperProps, styled } from '@mui/material'

export const ContentPaper = styled(Paper)<PaperProps>(() => ({
  display: 'flex',
  width: '400px',
  margin: '0 auto',
}))
