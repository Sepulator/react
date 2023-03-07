import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <div id="header">
        <Header />
      </div>
      <div id="main">
        <Outlet />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};
