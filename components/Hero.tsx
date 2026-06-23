/* ============================================================
   HERO (static markup + Three.js node-globe client component)
   ============================================================ */
import HeroGlobe from "./HeroGlobe";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <HeroGlobe />
      <div className="wrap">
        <span className="hero-status">
          <span className="dot"></span> Available to provide answers to your
          requirements.
        </span>
        <h1>
          From scattered processes to{" "}
          <span className="hl">systems people actually use.</span>
        </h1>
        <p className="hero-lead">
          I turn complex workflows into <b>reliable platforms</b>, <b>backend
          systems</b>, <b>business-insight dashboards</b> and <b>AI systems</b>.
        </p>
        <div className="sub">
          <span>Full-Stack Developer</span>
          <span>Healthcare IT</span>
          <span>Government Platforms</span>
          <span>Data Systems</span>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#" className="btn btn-ghost" id="resumeBtn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2v8m0 0L5 7m3 3l3-3M3 13h10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Download Resume
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="mouse"></div>
      </div>

      <div className="ticker">
        <div className="wrap">
          <div className="stat">
            <b>
              <em>10+</em>
            </b>
            <span className="lbl">Countries</span>
          </div>
          <div className="stat">
            <b>
              <em>20+</em>
            </b>
            <span className="lbl">Facilities Digitized</span>
          </div>
          <div className="stat">
            <b>
              <em>14+</em>
            </b>
            <span className="lbl">Government Datasets</span>
          </div>
          <div className="stat">
            <b>
              <em>500+</em>
            </b>
            <span className="lbl">Schools Impacted</span>
          </div>
        </div>
      </div>
    </header>
  );
}
