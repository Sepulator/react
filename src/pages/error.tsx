import { Container } from 'components/container';
import { Footer } from 'components/footer';
import { Header } from 'components/header';

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <Container>
        <div>Error 404</div>
      </Container>
      <Footer />
    </>
  );
};
