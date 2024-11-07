import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import navLinks from '../config/navLinks'

export default function MuiAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography color="inherit" variant="h6" component="div" sx={{ gap: 2, display: 'flex' }}>
            {navLinks.map((link, index) => (
              <Link key={index} to={link.to} style={{ textDecoration: 'none', color: ' inherit' }}>
                {link.label}
              </Link>
            ))}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
