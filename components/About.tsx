/* ============================================================
   ABOUT (static markup + Three.js "AM" avatar client component)
   ============================================================ */
import AboutAvatar from "./AboutAvatar";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div
          className="brand-art reveal"
          aria-label="Stylized AM monogram (placeholder for headshot)"
        >
          <AboutAvatar />
          <div className="mono-big">AM</div>
          <span className="corner tl">// based in kelowna, bc</span>
          <span className="corner br">[ swap → headshot ]</span>
        </div>

        <div className="about-bio">
          <span className="eyebrow reveal">About</span>
          <p className="lead reveal" data-d="1">
            I&apos;m a full-stack developer who builds <b>mission-critical platforms</b> the public
            sector and healthcare providers depend on every day.
          </p>
          <p className="reveal" data-d="2">
            Over 3+ years I&apos;ve shipped production systems across 10+ countries — from national
            education-governance platforms in Rwanda to multi-country EMR rollouts in Botswana,
            Guatemala, and Sierra Leone. The thread through all of it: digitizing paper workflows,
            making governance data-driven, and standing up healthcare infrastructure from scratch.
          </p>
          <p className="reveal" data-d="2">
            Now in Kelowna pursuing a CS degree at UBC Okanagan, I&apos;m bringing that
            international, high-stakes production experience into the Canadian tech market.
          </p>

          <div className="badges reveal" data-d="3">
            <span className="badge">
              <span className="b-dot"></span> UBC Okanagan — BSc Computer Science
            </span>
            <span className="badge">
              <span className="b-dot"></span> IBM Certified
            </span>
            <span className="badge">
              <span className="b-dot"></span> Microsoft Azure
            </span>
            <span className="badge">
              <span className="b-dot"></span> NPower Canada
            </span>
          </div>

          <div className="about-meta reveal" data-d="3">
            <div>
              <span className="k">Based in</span>
              <span className="v">Kelowna, BC 🇨🇦</span>
            </div>
            <div>
              <span className="k">Experience</span>
              <span className="v">3+ Years Production</span>
            </div>
            <div>
              <span className="k">Sectors</span>
              <span className="v">Gov · Health · Edu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
