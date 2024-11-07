import { Box, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const ContentBox = styled(Box)(() => ({
  flexGrow: 1,
}))

export const NavTypography = styled(Typography)(() => ({
  gap: 50,
  display: 'flex',
}))

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: ' inherit',
}))
