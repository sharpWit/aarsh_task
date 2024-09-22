import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navMenus } from '../../libs/options';

const Sidebar = () => {
  return (
    <Box
      sx={{
        maxWidth: '68px',
        width: '100%',
        paddingTop: '60px',
        paddingBottom: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '17px'
      }}
    >
      {navMenus.map((item) => (
        <NavLink to={`${item.slug}`} key={item.id} style={{ cursor: 'pointer' }}>
          {item.iconName === 'van-arsdel' ? (
            <img
              src="src/assets/van-arsdel.png"
              alt="Van Arsdel logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ) : (
            <img
              src={`src/assets/icons/${item.iconName}.png`}
              alt={`${item.iconName} icon`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                imageRendering: 'crisp-edges',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          )}
        </NavLink>
      ))}
    </Box>
  );
};

export default Sidebar;
