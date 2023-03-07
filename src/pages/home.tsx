import './container.scss'
import React from 'react';
import { Container } from 'components/container';

type Props = {
  className?: string;
};

export class Home extends React.Component<Props, {}> {
  render() {
    return (
      <Container>
        <div>
          <span>Home Page</span>
        </div>
      </Container>
      );
  }
}