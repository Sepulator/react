import React from 'react';
import { NavLink } from 'react-router-dom';

import { Paths } from '@/data/type';
import './header.scss';

type State = {
  title: string;
};

type Props = {
  className?: string;
};

interface IHeaderProps {
  data: Paths;
  onclick: (title: string) => void;
}

const paths: Paths = {
  '/': 'Home Page',
  '/about': 'About Page',
  '/form': 'Form Page',
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
        title: 'Error Page',
      };
  }

  onClick = (title: string) => {
    this.setState({
      title: title,
    });
  };

  render() {
    const title = <span className="fs-4 nav-title">{this.state.title}</span>;
    return (
      <header className="navbar navbar-expand navbar-light bg-white">
        <div className="container position-relative">
          <a className="navbar-brand mt-2 mt-sm-0" href="#!">
            <i className="fab fa-react fa-2x"></i>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <HeaderList data={paths} onclick={this.onClick} />
          </ul>
          {title}
        </div>
      </header>
    );
  }
}

export class HeaderList extends React.Component<IHeaderProps, State> {
  render() {
    const { data } = this.props;
    const items = Object.keys(data).map((key) => (
      <li className="nav-item" key={key}>
        <NavLink
          to={key}
          className="nav-link"
          style={({ isActive }) => {
            return {
              color: isActive ? 'white' : '',
            };
          }}
          onClick={() => this.props.onclick(paths[key])}
        >
          {paths[key].split(' ')[0]}
        </NavLink>
      </li>
    ));

    return <>{items}</>;
  }
}
