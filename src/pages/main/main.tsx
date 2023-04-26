import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Spinner } from '@/components/icons';

export const Main = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
