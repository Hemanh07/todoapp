import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const GalaxyContainer = styled(Container)({
  position: 'relative',
  width: '100%',
  height: '100vh',
  background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
  overflow: 'hidden',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '200%',
    height: '200%',
    marginLeft: '-100%',
    marginTop: '-100%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1%, rgba(0, 0, 0, 0.1) 100%)',
    animation: `${spin} 100s linear infinite`,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 1%, rgba(0, 0, 0, 0.2) 100%)',
    animation: `${spin} 50s linear infinite reverse`,
  },
});

const Star = styled(Box)({
  position: 'absolute',
  width: '1px',
  height: '1px',
  background: 'transparent',
  boxShadow: '0 0 2px #fff',
});

const generateStars = () => {
  const stars = [];
  for (let i = 0; i < 100; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    };
    stars.push(<Star key={i} style={style} />);
  }
  return stars;
};

function Test() {
  return (
    <GalaxyContainer maxWidth="xl">
      {generateStars()}
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h1" color="primary" align="center">
          Welcome to the Milky Way
        </Typography>
      </Box>
    </GalaxyContainer>
  );
}

export default Test;
