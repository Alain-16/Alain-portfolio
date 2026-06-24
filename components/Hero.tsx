/* ============================================================
   HERO (static markup + Three.js node-globe client component)
   ============================================================ */
import HeroGlobe from "./HeroGlobe";

// Google Drive "Anyone with the link" share URL for the resume.
// Replace FILE_ID with the id from your Drive share link.
const RESUME_URL = "https://drive.google.com/file/d/FILE_ID/view?usp=sharing";

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
          I turn complex workflows into <b>reliable platforms</b>,{" "}
          <b>backend systems</b>, <b>business-insight dashboards</b> and{" "}
          <b>AI systems</b>.
        </p>
        <div className="sub">
          <span>Software Engineer</span>
          <span>Healthcare IT</span>
          <span>Government Platforms</span>
          <span>Data Systems</span>
          <span>AI Systems</span>
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
          <a
            href="https://drive.google.com/file/d/1X8YN9WkWmRCamZByEXmOMVsa0YTlCnav/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            id="resumeBtn"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2v8m0 0L5 7m3 3l3-3M3 13h10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            View Resume
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
              <em>4+</em>
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
