import { About } from './pages/about/about';
import { ErrorPage } from './pages/error/errorPage';
import { Home } from './pages/home/home';
import { Main } from './pages/main/main';
import { createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/form/formPage';

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
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
    ],
  },
]);
