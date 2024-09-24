import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { navMenus } from '../../libs/options';
import { capitalizeFirstLetter } from '../../libs/utils';

const Sidebar = () => {
  return (
    <Box
      sx={{
        maxWidth: '68px',
        width: '100%',
        paddingTop: '58px',
        paddingBottom: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '17px'
      }}
    >
      {navMenus.map((item) => (
        <NavLink
          to={`${item.slug}`}
          key={item.id}
          style={{ cursor: 'pointer', maxWidth: '48px', maxHeight: '48px', height: '100%', width: '100%', overflow: 'hidden' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100% ' }}>
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
      <img
        src="src/assets/van-arsdel.png"
        alt="Van Arsdel logo"
        style={{
          width: '100%',
          height: '48px',
          objectFit: 'cover',
          imageRendering: 'crisp-edges',
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
      <img
        src="src/assets/icons/elipses.svg"
        alt="elipses"
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100% ', marginTop: '22px' }}>
        <img
          src="src/assets/icons/apps.svg"
          alt="apps"
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
          <p style={{ fontSize: '10px', fontWeight: 400, color: 'rgba(66, 66, 66, 1)' }}>Apps</p>
        </div>
      </div>
    </Box>
  );
};

export default Sidebar;
