import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ProTip from './Protip';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from './lib/theme';
import NavigationScroll from './containers/NavigationScroll';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary'
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationScroll>
          <div>Navigation Scroll</div>
        </NavigationScroll>
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
              Material UI Vite.js example in TypeScript
            </Typography>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
