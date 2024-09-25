import { Box, Container, TextField } from '@mui/material';
import styles from './Header.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

function samePageLinkNavigation(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

const Header = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event as React.MouseEvent<HTMLAnchorElement, MouseEvent>))
    ) {
      setValue(newValue);
    }
  };

  return (
    <>
      <header style={{ maxHeight: '48px', height: '100%', position: 'fixed', top: 0, left: 0, right: 0 }} className={styles.mainHeader}>
        {/* Header Content Desktop */}
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
                width: '24px',
                height: '24px',
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
              <img src="src/assets/Avatar.png" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
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

      {/* Header Phones */}
      <header className={styles.mainHeaderPhones}>
        <Container className={styles.mainHeaderPhonesContent}>
          <div className={styles.headTop}>
            <div style={{ cursor: 'pointer' }}>
              <img src="src/assets/Union.png" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
            </div>
            <h1 className={styles.heading}>Van Arsdel</h1>

            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
              <div style={{ cursor: 'pointer', marginLeft: 0, width: 'auto', height: 'auto', maxWidth: '20px', maxHeight: '20px' }}>
                <img
                  src="src/assets/icons/Bot.svg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
              <div style={{ cursor: 'pointer', marginLeft: 0, width: 'auto', height: 'auto', maxWidth: '20px', maxHeight: '20px' }}>
                <img
                  src="src/assets/icons/elipses.svg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
            </Box>
          </div>
          <div className={styles.headBottom}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              role="navigation"
              sx={{
                '& a': { flex: 1 }
              }}
            >
              <LinkTab label="Tab1" href="#" />
              <LinkTab label="Tab2" href="#" />
              <LinkTab label="Tab3" href="#" />
            </Tabs>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
