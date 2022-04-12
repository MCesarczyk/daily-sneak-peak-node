import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Title } from './Title';
import { useFetchData } from '../../assets/utils/useFetchData';
import { TITLE_URL } from '../../assets/links';

const Header = () => {
  const title = useFetchData(TITLE_URL);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static" data-testid="header">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={'/'}>
            <Title>{title}</Title>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
};

export default Header;