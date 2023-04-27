import rssLogo from '@/assets/rs_school_js.svg';

export const Footer = () => {
  return (
    <footer className="text-center text-white bg-color" style={{ marginTop: 'auto' }}>
      <div className="container">
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://rs.school/"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <img src={rssLogo} className="rsslogo" alt="RS-School Logo" />
        </a>
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://www.youtube.com/@RollingScopesSchool"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          className="btn-link btn-floating btn-lg text-white"
          href="https://github.com/Sepulator"
          role="button"
          data-mdb-ripple-color="dark"
        >
          <i className="fab fa-github"></i>
        </a>
        <span className="">© 2023</span>
      </div>
    </footer>
  );
};
