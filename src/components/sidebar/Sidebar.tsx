import { Box } from '@mui/material';

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
      {['activity', 'chat', 'teams', 'calendar', 'calls', 'files', 'van-arsdel', 'elipses', 'apps'].map((iconName, idx) => (
        <div key={idx} style={{ cursor: 'pointer' }}>
          {iconName === 'van-arsdel' ? (
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
              src={`src/assets/icons/${iconName}.png`}
              alt={`${iconName} icon`}
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
        </div>
      ))}
    </Box>
  );
};

export default Sidebar;
