import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-16">
        <Container maxWidth="md">
          <Box className="text-center">
            <Typography variant="h1" className="text-9xl font-bold text-blue-600 mb-4">
              404
            </Typography>
            <Typography variant="h3" className="text-3xl font-bold text-gray-800 mb-4">
              Page Not Found
            </Typography>
            <Typography variant="body1" className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist. You might have mistyped the URL or the page may have been moved.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="contained"
                size="large"
                startIcon={<span>🏠</span>}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3"
                onClick={() => navigate('/')}
              >
                Go Home
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<span>←</span>}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>
          </Box>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
