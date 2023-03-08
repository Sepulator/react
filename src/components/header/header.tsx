import { Container } from 'components/container';
import './header.scss';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
          <a className="navbar-brand mt-2 mt-sm-0" href="https://mdbootstrap.com/">
            <i className="fab fa-react fa-2x"></i>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <a className="nav-link " href="https://mdbootstrap.com/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://mdbootstrap.com/docs/standard/">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
