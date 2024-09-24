// third-party
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import MainRoot from '../components/main/MainRoot';
import { navMenus } from '../libs/options';
import { capitalizeFirstLetter } from '../libs/utils';
import styles from './MainLayout.module.scss';

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
          justifyContent: 'flex-end',
          overflow: 'hidden',
          backgroundColor: '#f0f0f0',
          color: '#616161'
        }}
        className={styles.mainLayout}
      >
        {/* Sidebar */}
        <Sidebar />

        {/* Main Container */}
        <div
          style={{
            maxWidth: '1800px',
            width: '100%',
            height: '100%',
            marginTop: '48px',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Main Content */}

          <Box sx={{ color: 'white', height: '100vh', overflow: 'auto' }}>
            {isRoot ? <MainRoot /> : <Outlet />}
            {/* Copyright */}
            {/* <Copyright /> */}
          </Box>
        </div>

        <footer style={{ backgroundColor: '#f0f0f0', color: '#616161' }} className={styles.mainLayoutFooter}>
          <div className={styles.mainLayoutFooterContent}>
            {navMenus.map((item) => (
              <NavLink
                to={`${item.slug}`}
                key={item.id}
                style={{ cursor: 'pointer', maxWidth: '48px', maxHeight: '48px', height: '100%', width: '100%', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={`src/assets/icons/${item.iconName}.svg`}
                    alt={`${item.iconName} icon`}
                    style={{
                      width: '24px',
                      height: '24px',
                      objectFit: 'contain',
                      imageRendering: 'crisp-edges',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div style={{ marginTop: '-6px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 400, color: 'rgba(66, 66, 66, 1)' }}>{capitalizeFirstLetter(item.name)}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
};

export default MainLayout;
