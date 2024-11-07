import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography
            color="inherit"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, gap: 2, display: 'flex' }}
          >
            <Link to={'/'} style={{ textDecoration: 'none', color: ' inherit' }}>
              Home
            </Link>
            <Link to={'/favorites'} style={{ textDecoration: 'none', color: ' inherit' }}>
              Favorites
            </Link>
            <Link to={'/recipedetails'} style={{ textDecoration: 'none', color: ' inherit' }}>
              Recipe Details
            </Link>
            <Link to={'/shoppinglist'} style={{ textDecoration: 'none', color: ' inherit' }}>
              Shopping List
            </Link>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
