import { Box, Container, TextField } from '@mui/material';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header
      style={{
        width: '100%',
        maxHeight: '48px',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        margin: '0 auto',
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
        color: '#616161',
        border: '.2em solid hsla(0, 0%, 0%, 0.05) '
      }}
    >
      {/* Header Content */}
      <Container
        maxWidth="xl"
        sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* logo */}
        <div style={{ cursor: 'pointer', marginLeft: 0, width: 'auto', height: 'auto', maxWidth: '48px', maxHeight: '48px' }}>
          <img
            src="src/assets/Host-brand.png"
            alt="Host Brand Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              imageRendering: 'crisp-edges',
              filter: 'contrast(110%) brightness(95%)'
            }}
          />
        </div>

        {/* search-bar */}
        <Box
          sx={{
            maxWidth: '548px',
            width: '100%',
            maxHeight: '32px',
            height: '100%',
            padding: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden'
          }}
        >
          {/* arrows */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '64px'
            }}
          >
            <div style={{ cursor: 'pointer' }}>
              <img src="src/assets/icons/left-arrow.svg" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ cursor: 'pointer' }}>
              <img src="src/assets/icons/right-arrow.svg" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* search */}
          <div
            style={{
              maxHeight: '26px',
              height: '100%',
              width: '468px',
              display: 'flex',
              overflow: 'hidden',
              backgroundColor: 'white',
              marginLeft: '26px',
              marginRight: '16px'
            }}
            className={styles.inputWrapper}
          >
            {/* Search icon */}
            <div className={styles.searchIcon}>
              <img
                src="src/assets/icons/search-icon.svg"
                style={{ width: '24px', height: 'auto', objectFit: 'contain' }}
                alt="Search Icon"
              />
            </div>
            <TextField
              type="search"
              placeholder="Search"
              role="search"
              variant="standard"
              className={styles['css-ro0uv6-MuiFormControl-root-MuiTextField-root']}
              InputProps={{
                disableUnderline: true
              }}
              sx={{
                width: '100%',
                border: 'none'
                // '& .MuiInputBase-input': {
                //   padding: '0.5em'
                // }
              }}
            />
          </div>
        </Box>

        {/* person */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '224px',
            paddingRight: '19px',
            paddingLeft: '6px'
          }}
        >
          <div style={{ cursor: 'pointer' }}>
            <img src="src/assets/icons/elipses.svg" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ cursor: 'pointer' }}>
            <img src="src/assets/Avatar.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ cursor: 'pointer', marginBottom: '6px' }}>
            <img src="src/assets/icons/hiphen.svg" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ cursor: 'pointer' }}>
            <img src="src/assets/icons/rectangle.svg" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ cursor: 'pointer' }}>
            <img src="src/assets/icons/cross.svg" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
