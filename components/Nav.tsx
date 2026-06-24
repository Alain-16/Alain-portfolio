/* ============================================================
   NAV + mobile menu (static markup; behavior in SiteEffects)
   ============================================================ */
export default function Nav() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="wrap">
          <a className="logo" href="#top" aria-label="Alain Mugisha home">
            <span className="mono-mark">AM</span>
            <span className="logo-name">Alain Mugisha</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#impact">Impact Map</a>
            <a href="#contact">Book a Call</a>
          </div>
          <a href="#contact" className="btn btn-primary nav-cta">
            Let&apos;s Connect
          </a>
          <button className="burger" id="burger" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <a href="#about">
          <span className="idx">01</span> About
        </a>
        <a href="#projects">
          <span className="idx">02</span> Projects
        </a>
        <a href="#skills">
          <span className="idx">03</span> Skills
        </a>
        <a href="#impact">
          <span className="idx">04</span> Impact Map
        </a>
        <a href="#contact">
          <span className="idx">05</span> Book a Call
        </a>
        <a href="#contact" className="btn btn-primary">
          Let&apos;s Connect
        </a>
      </div>
    </>
  );
}
