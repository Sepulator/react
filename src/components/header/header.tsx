import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Paths } from '@/types/data';

interface IHeaderProps {
  data: Paths;
}

const paths: Paths = {
  '/': 'Home Page',
  '/about': 'About Page',
  '/form': 'Form Page',
};

export const Header = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string>(paths[pathname]);

  useEffect(() => {
    const title = paths[pathname];
    if (title) {
      setTitle(title);
    } else setTitle('Error Page');
  }, [pathname]);

  return (
    <header className="navbar navbar-expand navbar-light bg-white">
      <div className="container position-relative">
        <a className="navbar-brand mt-2 mt-sm-0" href="#!">
          <i className="fab fa-react fa-2x"></i>
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <HeaderList data={paths} />
        </ul>
        <span className="fs-4 nav-title">{title}</span>
      </div>
    </header>
  );
};

export const HeaderList = ({ data }: IHeaderProps) => {
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
          >
            {paths[key].split(' ')[0]}
          </NavLink>
        </li>
      ))}
    </>
  );
};
