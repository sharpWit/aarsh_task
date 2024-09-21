import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import themes from './themes/themes';
import router from './routes/router';
import Loader from './components/ui/Loader';
import NavigationScroll from './containers/NavigationScroll';

function App() {
  const theme = themes();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavigationScroll>
          <RouterProvider router={router} fallbackElement={<Loader />} />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
