import React from 'react';
import { Container, Typography, Grid, Link, IconButton, Box } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Commands', href: '#commands' },
    { name: 'Documentation', href: '#documentation' },
    { name: 'Support', href: '#support' }
  ];

  const resources = [
    { name: 'Getting Started', href: '/docs/getting-started' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'GitHub Repository', href: 'https://github.com/your-repo/Timer-Bot11' },
    { name: 'Discord Server', href: 'https://discord.gg/your-server' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'License (MIT)', href: 'https://github.com/your-repo/Timer-Bot11/blob/main/LICENSE' }
  ];

  const socialLinks = [
    { icon: '🐛', href: 'https://github.com/your-repo/Timer-Bot11', label: 'GitHub' },
    { icon: '💬', href: 'https://discord.gg/your-server', label: 'Discord' },
    { icon: '📧', href: 'mailto:support@crizmodo.com', label: 'Email' },
    { icon: '🐦', href: 'https://twitter.com/crizmodo', label: 'Twitter' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" className="font-bold text-white mb-4">
              CrizModo
            </Typography>
            <Typography variant="body2" className="text-gray-300 mb-4 leading-relaxed">
              A comprehensive Discord bot providing Pomodoro timer functionality and dynamic voice channel management. 
              Boost your server's productivity and organization.
            </Typography>
            
          </Grid>

         

       
        </Grid>

        {/* Stats Bar */}
        <Box className="border-t border-gray-800 mt-8 pt-8">
          <Grid container spacing={4} className="text-center">
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" className="font-bold text-blue-400 mb-1">
                50k+
              </Typography>
              <Typography variant="body2" className="text-gray-400">
                Active Users
              </Typography>
            </Grid>
            
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" className="font-bold text-blue-400 mb-1">
                99.9%
              </Typography>
              <Typography variant="body2" className="text-gray-400">
                Uptime
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h4" className="font-bold text-blue-400 mb-1">
                24/7
              </Typography>
              <Typography variant="body2" className="text-gray-400">
                Support
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Bar */}
        <Box className="border-t border-gray-800 mt-8 pt-6">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="body2" className="text-gray-400 text-center md:text-left">
                © {currentYear} CrizModo. All rights reserved. Built with ❤️ for the Discord community.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" className="text-gray-400 text-center md:text-right mt-2 md:mt-0">
                Made with Discord.js v14, MongoDB, and Node.js
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
