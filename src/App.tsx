import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router';

class App extends React.Component {
  render() {
    return <RouterProvider router={routers} />;
  }
}

export default App;
