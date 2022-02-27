import React from 'react';
import Box from '@mui/material/Box';
import { Link, Typography } from '@mui/material';
import { AUTHOR_PAGE_ADDRESS, AUTHOR_PAGE_LABEL } from '../../assets/data';

const Footer = () => (
  <Box
    data-testid="footer"
    sx={{ bgcolor: 'background.paper', p: 6, marginTop: 'auto' }}
    component="footer"
  >
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' '}
      <Link sx={{ textDecoration: 'none' }} href={AUTHOR_PAGE_ADDRESS}>
        {AUTHOR_PAGE_LABEL}
      </Link>
    </Typography>
  </Box>
);

export default Footer;