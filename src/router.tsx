import { createBrowserRouter, Navigate } from 'react-router-dom';

import { About } from './pages/about/about';
import { ErrorPage } from './pages/error/errorPage';
import { Home } from './pages/home/home';
import { Main } from './pages/main/main';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/*',
        element: <Navigate to="/404" replace />,
      },
      {
        path: '/404',
        element: <ErrorPage />,
      },
    ],
  },
]);
