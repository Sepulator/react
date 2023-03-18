import { Paths } from '@/data/type';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
type State = {
  title: string;
};

type Props = {
  className?: string;
};

const paths: Paths = {
  '/': 'Home Page',
  '/about': 'About Page',
  error: 'Error Page',
};

export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { pathname } = window.location;
    const title = paths[pathname];
    if (title) {
      this.state = {
        title: title,
      };
    } else
      this.state = {
        title: paths.error,
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
            <li className="nav-item">
              <NavLink
                to={'/form'}
                className="nav-link"
                style={({ isActive }) => {
                  return {
                    color: isActive ? 'white' : '',
                  };
                }}
                onClick={() => this.setState({ title: 'Form Page' })}
              >
                Form
              </NavLink>
            </li>
          </ul>
          {title}
        </div>
      </header>
    );
  }
}
