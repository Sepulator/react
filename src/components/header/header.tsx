import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Paths } from '@/data/type';
import './header.scss';

interface IHeaderProps {
  data: Paths;
  onclick: (title: string) => void;
}

const paths: Paths = {
  '/': 'Home Page',
  '/about': 'About Page',
  '/form': 'Form Page',
};

export const Header = () => {
  const { pathname } = window.location;
  const [title, setTitle] = useState<string>(paths[pathname]);

  useEffect(() => {
    const { pathname } = window.location;
    if (paths[pathname]) {
      setTitle(paths[pathname]);
    } else setTitle('Error Page');
  }, []);

  const onClick = (title: string) => {
    setTitle(title);
  };

  return (
    <header className="navbar navbar-expand navbar-light bg-white">
      <div className="container position-relative">
        <a className="navbar-brand mt-2 mt-sm-0" href="#!">
          <i className="fab fa-react fa-2x"></i>
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <HeaderList data={paths} onclick={onClick} />
        </ul>
        <span className="fs-4 nav-title">{title}</span>
      </div>
    </header>
  );
};

export const HeaderList = ({ data, onclick }: IHeaderProps) => {
  return (
    <>
      {Object.keys(data).map((key) => (
        <li className="nav-item" key={key}>
          <NavLink
            to={key}
            className="nav-link"
            style={({ isActive }) => {
              return {
                color: isActive ? 'white' : '',
              };
            }}
            onClick={() => onclick(paths[key])}
          >
            {paths[key].split(' ')[0]}
          </NavLink>
        </li>
      ))}
    </>
  );
};
