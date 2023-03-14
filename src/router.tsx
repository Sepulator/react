import { About } from './pages/about/about';
import { ErrorPage } from './pages/error/errorPage';
import { Home } from './pages/home/home';
import { Main } from './pages/main/main';
import { createBrowserRouter } from 'react-router-dom';

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
    ],
  },
]);
