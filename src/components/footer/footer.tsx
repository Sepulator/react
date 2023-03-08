import rssLogo from '../../assets/rs_school_js.svg'
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="text-center text-white mt-4 fixed-bottom  bg-color">
      <div className="container">
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://rs.school/"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <img src={rssLogo} className='rsslogo' alt="RS-School Logo" />
        </a>
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.youtube.com/@RollingScopesSchool"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-youtube"></i>© 2023
        </a>
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://github.com/Sepulator"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};
