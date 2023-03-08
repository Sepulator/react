import './container.scss'
import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

class Container extends React.Component<Props, {}> {
  render() {
    return (
      <div className={`container ${this.props.className}`}>
        {this.props.children}
      </div>
      );
  }
}