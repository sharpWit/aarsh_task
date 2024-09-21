import { Box, Container, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import ProTip from '../Protip';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        height: '60px',
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
    <Container
      maxWidth="xl"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.1rem',
        overflow: 'hidden',
        backgroundColor: 'pink'
      }}
    >
      <Box sx={{ maxWidth: '14rem', paddingTop: 2, paddingBottom: 2, width: '100%', border: '.1rem solid black' }}>Sidebar</Box>
      <Box sx={{ width: '100%', height: '100%', mt: 12, paddingTop: '.9em', paddingLeft: '.6em', backgroundColor: 'greenyellow' }}>
        <PerfectScrollbar component="div" style={{ width: '100%', height: '100%', maxHeight: 'calc(100vh - 120px)', overflowX: 'hidden' }}>
          <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
            Material UI Vite.js example in TypeScript
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '.3em', backgroundColor: 'orange' }}>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/sample-page">Sample</Link>
          </Box>
          <Container sx={{ backgroundColor: 'slateblue', color: 'white', height: '100%', overflow: 'auto' }}>
            <Outlet />
          </Container>
          <ProTip />
          <Copyright />
        </PerfectScrollbar>
      </Box>
    </Container>
  );
};

export default MainLayout;
