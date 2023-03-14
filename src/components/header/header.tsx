import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
type State = {
  title: string;
};

type Props = {
  className?: string;
  error: boolean;
};

export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    if (props.error) {
      this.state = {
        title: 'Error Page',
      };
    } else
      this.state = {
        title: 'Home Page',
      };
  }

  render() {
    const title = <span className="fs-4 nav-title">{this.state.title}</span>;
    return (
      <header className="navbar navbar-expand navbar-light bg-white">
        <div className="container position-relative">
          <a className="navbar-brand mt-2 mt-sm-0" href="#!">
            <i className="fab fa-react fa-2x"></i>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to={'/'}
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
                onClick={() => this.setState({ title: 'Home Page' })}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={'/about'}
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
                onClick={() => this.setState({ title: 'About Page' })}
              >
                About
              </NavLink>
            </li>
          </ul>
          {title}
        </div>
      </header>
    );
  }
}
