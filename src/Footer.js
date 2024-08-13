import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <Box component="footer" sx={{ 
      mt: 'auto', 
      py: 3, 
      backgroundColor: 'background.paper',
      borderTop: '1px solid',
      borderColor: 'divider'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 2, mb: { xs: 2, sm: 0 } }}>
            <img src="/path-to-huawei-appgallery-badge.png" alt="Huawei AppGallery" height="32" />
            <img src="/path-to-windows-store-badge.png" alt="Windows Store" height="32" />
            <img src="/path-to-google-play-badge.png" alt="Google Play" height="32" />
            <img src="/path-to-app-store-badge.png" alt="App Store" height="32" />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link component={RouterLink} to="/about" color="inherit" underline="hover">About</Link>
            <Link component={RouterLink} to="/features" color="inherit" underline="hover">Features</Link>
            <Link component={RouterLink} to="/pricing" color="inherit" underline="hover">Pricing</Link>
            <Link component={RouterLink} to="/gallery" color="inherit" underline="hover">Gallery</Link>
            <Link component={RouterLink} to="/team" color="inherit" underline="hover">Team</Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            En
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © 2024 All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
