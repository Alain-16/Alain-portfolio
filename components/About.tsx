/* ============================================================
   ABOUT (headshot + bio)
   ============================================================ */
import Image from "next/image";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div className="brand-art reveal" aria-label="Photo of Alain Mugisha">
          <Image
            src="/alain.jpeg"
            alt="Alain Mugisha"
            fill
            sizes="(max-width: 900px) 380px, 40vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="about-bio">
          <span className="eyebrow reveal">About</span>
          <p className="lead reveal" data-d="1">
            I&apos;m a software engineer who builds{" "}
            <b>mission-critical platforms</b> across different sectors that
            professionals depend on every day.
          </p>
          <p className="reveal" data-d="2">
            Over 3+ years I&apos;ve shipped production systems across 4+
            countries from national education-governance platforms in Rwanda to
            multi-country EMR rollouts in Rwanda, Botswana and Guatemala. The
            thread through all of it: digitizing manual workflows, making
            governance data-driven, standing up healthcare infrastructure from
            scratch and Integrating AI to reduce human errors.
          </p>
          <p className="reveal" data-d="2">
            Now base in canada, I&apos;m bringing that international,
            high-stakes production experience into the Canadian tech market.
          </p>

          <div className="badges reveal" data-d="3">
            <span className="badge">
              <span className="b-dot"></span> UBC | BSc Computer Science
            </span>
            <span className="badge">
              <span className="b-dot"></span> AWS Solution Architect
            </span>
            <span className="badge">
              <span className="b-dot"></span> IBM Certified
            </span>
            <span className="badge">
              <span className="b-dot"></span> Microsoft Azure
            </span>
          </div>

          <div className="about-meta reveal" data-d="3">
            <div>
              <span className="k">Based in</span>
              <span className="v">Canada, BC 🇨🇦</span>
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
