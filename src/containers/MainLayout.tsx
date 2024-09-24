// third-party
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './MainLayout.module.scss';
import MainRoot from '../components/main/MainRoot';

// function Copyright() {
//   return (
//     <Typography
//       variant="body2"
//       align="center"
//       sx={{
//         height: '44px',
//         marginTop: '4px',
//         color: 'text.secondary'
//       }}
//     >
//       {'Copyright © '}
//       <Link color="inherit" to="/" style={{ padding: '.2em' }}>
//         Your Website
//       </Link>
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

const MainLayout = () => {
  const location = useLocation();
  const isRoot = location.pathname === '/';

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
            backgroundColor: '#ffffff'
          }}
          className={styles['css-1mtq39y-MuiContainer-root']}
        >
          {/* Main Content */}

          <Box sx={{ color: 'white', height: '100vh', overflow: 'auto' }}>
            {isRoot ? <MainRoot /> : <Outlet />}
            {/* Copyright */}
            {/* <Copyright /> */}
          </Box>
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
