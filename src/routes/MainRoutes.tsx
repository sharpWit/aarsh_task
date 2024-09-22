import { lazy } from 'react';

// project imports
import MainLayout from '../containers/MainLayout';
import Loadable from '../components/ui/Loadable';
import ErrorPage from '../ErrorPage';
import Chat from '../views/chat/Chat';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Dashboard')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));

// MAIN ROUTING
const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/activity',
      element: <DashboardDefault />
    },
    {
      path: '/chat',
      element: <Chat props={'hey'} />
    },
    {
      path: 'teams',
      element: <SamplePage />
    },
    {
      path: 'calendar',
      element: <SamplePage />
    },
    {
      path: 'calls',
      element: <SamplePage />
    },
    {
      path: 'files',
      element: <SamplePage />
    },
    {
      path: 'van-arsdel',
      element: <SamplePage />
    },
    {
      path: 'elipses',
      element: <SamplePage />
    },
    {
      path: 'apps',
      element: <SamplePage />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ],
  errorElement: <ErrorPage />
};

export default MainRoutes;
