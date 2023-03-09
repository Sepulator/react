import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <a className="navbar-brand mt-2 mt-sm-0" href="#!">
            <i className="fab fa-react fa-2x"></i>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link to={'/'} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
