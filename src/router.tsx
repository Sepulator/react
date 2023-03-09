import { About, Home, Main, ErrorPage } from './pages';
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
