import { lazy } from 'react';

// project imports
import MainLayout from '../containers/MainLayout';
import Loadable from '../components/ui/Loadable';
import ErrorPage from '../ErrorPage';
import About from '../views/about/About';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Dashboard')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
// const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
// const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));

// MAIN ROUTING
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/about',
      element: <About props={'hey'} />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ],
  errorElement: <ErrorPage />
};

export default MainRoutes;
