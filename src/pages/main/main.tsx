import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
