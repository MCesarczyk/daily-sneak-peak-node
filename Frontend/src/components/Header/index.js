import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Title } from './Title';
import { useFetchData } from '../../assets/utils/useFetchData';
import { TITLE_URL } from '../../assets/links';
import { NavButton } from './styled';
import { pages } from '../../assets/fixtures';

const Header = () => {
  const title = useFetchData(TITLE_URL);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" data-testid="header">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }} >
            <IconButton
              sx={{ display: { xs: 'flex', md: 'none' } }}
              size="large"
              aria-label="hamburger menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Link to={'/'}>
              <Title>{title}</Title>
            </Link>
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <Link key={page.id} to={page.path}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignSelf: 'stretch' } }}>
            {pages.map((page) => (
              <NavButton key={page.id} to={page.path}>
                <Button
                  sx={{ px: 2, color: 'white', display: 'block', borderRadius: '0' }}
                  onClick={handleCloseNavMenu}
                >
                  {page.label}
                </Button>
              </NavButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default Header;