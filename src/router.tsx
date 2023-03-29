import { createBrowserRouter, Navigate } from 'react-router-dom';

import { About } from './pages/about/about';
import { ErrorPage } from './pages/error/errorPage';
import { Main } from './pages/main/main';
import { FormPage } from './pages/form/formPage';
import { Home } from './pages/home/home';


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
        path: '/form',
        element: <FormPage />,
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
