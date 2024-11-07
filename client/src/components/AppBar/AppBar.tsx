import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { NavTypography, StyledLink } from './AppBar.styles'
import navLinks from '../../config/navLinks'

export default function MuiAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <NavTypography color="inherit" variant="h6">
            {navLinks.map((link, index) => (
              <StyledLink key={index} to={link.to}>
                {link.label}
              </StyledLink>
            ))}
          </NavTypography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
