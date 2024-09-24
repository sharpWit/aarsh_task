import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import ChartCards from './ChartCards';
import SidebarDropdown from './SidebarDropdown ';
import { sidebarItems } from '../../libs/options';
import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChartCardsPhones from './ChartCardsPhones';
import styles from './MainRoot.module.scss';

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

const MainRoot = () => {
  const [value, setValue] = useState(0);
  const [age, setAge] = useState('10');

  const handleMainSelectionChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

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
    <PerfectScrollbar
      component="div"
      style={{ width: '100%', height: '100%', maxHeight: 'calc(100vh - 60px)', overflowX: 'hidden', marginBottom: '10px' }}
    >
      <div style={{ width: '100%', height: 'auto' }} className={styles.mainLayout}>
        <Box sx={{ display: 'grid', height: '100%', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2px' }}>
          {/* header */}
          <Box sx={{ gridColumn: 'span 12', maxHeight: '110px', overflow: 'hidden', borderBottom: '.2em solid hsla(0, 0%, 0%, 0.05) ' }}>
            <Container maxWidth="xl" sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* upper */}
              <Box sx={{ width: '100%', padding: '4px', display: 'flex', gap: 2, borderBottom: '.2em solid hsla(0, 0%, 0%, 0.05) ' }}>
                <Box style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  {/* logo */}
                  <div style={{ cursor: 'pointer', marginLeft: 0, width: 'auto', height: 'auto', maxWidth: '32px', maxHeight: '48px' }}>
                    <img
                      src="src/assets/brand-logo.png"
                      alt="Brand Logo"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        imageRendering: 'crisp-edges',
                        filter: 'contrast(110%) brightness(95%)'
                      }}
                    />
                  </div>
                  <h1
                    style={{
                      fontFamily: 'Segoe UI',
                      fontSize: '18px',
                      fontWeight: 700,
                      lineHeight: '24px',
                      color: 'black'
                    }}
                  >
                    Van Arsdel
                  </h1>
                </Box>

                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" role="navigation">
                  <LinkTab label="Home" href="#" />
                  <LinkTab label="Timeline" href="#" />
                  <LinkTab label="Chat" href="#" />
                  <LinkTab label="Assigned to you" href="#" />
                </Tabs>

                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
                  <div style={{ cursor: 'pointer', marginLeft: 0, width: 'auto', height: 'auto', maxWidth: '20px', maxHeight: '20px' }}>
                    <img
                      src="src/assets/icons/return.svg"
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
              </Box>
              {/* lower */}
              <Box sx={{ width: '100%', padding: '4px', display: 'flex', alignItems: 'center', gap: 11 }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                  {/* hambergur menu */}
                  <div
                    style={{
                      cursor: 'pointer',
                      marginLeft: 0,
                      width: '100%',
                      height: '100%',
                      maxWidth: '32px',
                      maxHeight: '32px',
                      padding: '6px'
                    }}
                  >
                    <img
                      src="src/assets/icons/ham-menu.svg"
                      alt="Hambergure menu"
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>

                  <Box sx={{ minWidth: 120, overflow: 'hidden', marginLeft: '8px' }}>
                    <FormControl fullWidth>
                      <Select
                        sx={{ width: '100%', height: '32px' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleMainSelectionChange}
                      >
                        <MenuItem value={10}>Text-1</MenuItem>
                        <MenuItem value={20}>Text-2</MenuItem>
                        <MenuItem value={30}>Text-3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box
                  sx={{
                    maxWidth: '286px',
                    width: '100%',
                    maxHeight: '32px',
                    height: '100%',
                    marginLeft: 'auto',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                >
                  <p className={styles.searchLabel}>Filter</p>
                  {/* search */}
                  <div
                    style={{
                      maxHeight: '26px',
                      height: '100%',
                      width: '208px',
                      display: 'flex',
                      overflow: 'hidden',
                      backgroundColor: 'white'
                    }}
                    className={styles.inputWrapper}
                  >
                    {/* Search icon */}
                    <div className={styles.searchIcon}>
                      <img
                        src="src/assets/icons/search-icon.svg"
                        style={{ width: '20px', height: 'auto', objectFit: 'contain' }}
                        alt="Search Icon"
                      />
                    </div>
                    <TextField
                      type="search"
                      placeholder="Find"
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
              </Box>
            </Container>
          </Box>
          {/* sidebar */}
          <Box sx={{ gridColumn: 'span 2', height: '100%', borderRight: '.2em solid hsla(0, 0%, 0%, 0.05) ' }}>
            <Container sx={{ height: '100%' }}>
              <SidebarDropdown title="Groupe title" items={sidebarItems} />
            </Container>
          </Box>
          {/* main */}
          <Box sx={{ gridColumn: 'span 10', height: '100%', padding: '20px' }}>
            <ChartCards />
          </Box>
        </Box>
      </div>
      <ChartCardsPhones />
    </PerfectScrollbar>
  );
};

export default MainRoot;
