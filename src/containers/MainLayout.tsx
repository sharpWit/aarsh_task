// third-party
import { Link, Outlet } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Box, Container, Typography } from '@mui/material';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        height: '60px',
        marginTop: '4px',
        color: 'text.secondary'
      }}
    >
      {'Copyright © '}
      <Link color="inherit" to="/" style={{ padding: '.2em' }}>
        Your Website
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

const MainLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          overflow: 'hidden',
          backgroundColor: '#f0f0f0',
          color: '#616161'
        }}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Container */}
        <Container
          maxWidth="xl"
          sx={{
            maxWidth: '1298px',
            width: '100%',
            height: '100%',
            mt: '48px',
            paddingTop: '.9em',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Main Header */}
          <PerfectScrollbar component="div" style={{ width: '100%', height: '100%', maxHeight: 'calc(100vh - 30px)', overflowX: 'hidden' }}>
            <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
              Material UI Vite.js example in TypeScript
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '.3em', backgroundColor: 'orange' }}>
              <Link to="/about">About</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/sample-page">Sample</Link>
            </Box>

            {/* Main Content */}
            <Container sx={{ backgroundColor: 'slateblue', color: 'white', height: '100%', overflow: 'auto', marginTop: '12px' }}>
              <Outlet />
            </Container>

            {/* Copyright */}
            <Copyright />
          </PerfectScrollbar>
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
