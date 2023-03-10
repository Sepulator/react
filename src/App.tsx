import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router';

type Props = {
  className?: string;
};

class App extends React.Component<Props, Record<string, never>> {
  render() {
    return (
      <>
        <RouterProvider router={routers} />
      </>
    );
  }
}

export default App;
