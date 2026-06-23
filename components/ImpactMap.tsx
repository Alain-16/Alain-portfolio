/* ============================================================
   IMPACT MAP (static markup; pin hover cards are CSS-driven)
   ============================================================ */
export default function ImpactMap() {
  return (
    <section className="section impact" id="impact">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Impact Across Borders</span>
          <h2>Where I&apos;ve built</h2>
          <p>
            Production systems delivered across three continents — government, healthcare and
            education, shipped where connectivity and stakes are real.
          </p>
        </div>

        <div className="impact-layout reveal" data-d="1">
          {/* desktop interactive map */}
          <div className="map-panel" id="mapPanel" aria-hidden="true">
            <svg className="map-arcs" viewBox="0 0 1000 500" preserveAspectRatio="none" fill="none">
              <g stroke="var(--teal)" strokeWidth="1.4" strokeLinecap="round">
                <path className="arc" d="M180,150 Q330,40 560,290" />
                <path className="arc" d="M180,150 Q200,210 260,260" />
                <path className="arc" d="M260,260 Q420,150 560,290" />
                <path className="arc" d="M560,290 Q580,340 540,350" />
              </g>
            </svg>

            <button className="pin" data-country="canada" style={{ left: "18%", top: "30%" }}>
              <span className="pin-dot"></span>
              <span className="pin-ring"></span>
              <span className="pin-label">Canada</span>
              <span className="pin-card">
                <span className="pc-flag">🇨🇦</span>
                <span className="pc-name">
                  Canada <em>· Kelowna, BC</em>
                </span>
                <span className="pc-projects">
                  Current base — BSc Computer Science @ UBC Okanagan
                </span>
                <span className="pc-tags">
                  <span className="st edu">Education</span>
                </span>
                <span className="pc-metric">
                  Bringing international production experience to the Canadian market
                </span>
              </span>
            </button>

            <button className="pin" data-country="guatemala" style={{ left: "26%", top: "52%" }}>
              <span className="pin-dot"></span>
              <span className="pin-ring"></span>
              <span className="pin-label">Guatemala</span>
              <span className="pin-card">
                <span className="pc-flag">🇬🇹</span>
                <span className="pc-name">Guatemala</span>
                <span className="pc-projects">OpenMRS / Bahmni EMR</span>
                <span className="pc-tags">
                  <span className="st health">Healthcare</span>
                </span>
                <span className="pc-metric">
                  Multi-country EMR rollout · facilities digitized from paper
                </span>
              </span>
            </button>

            <button
              className="pin active"
              data-country="rwanda"
              style={{ left: "56%", top: "58%" }}
            >
              <span className="pin-dot"></span>
              <span className="pin-ring"></span>
              <span className="pin-label">Rwanda</span>
              <span className="pin-card">
                <span className="pc-flag">🇷🇼</span>
                <span className="pc-name">
                  Rwanda <em>· primary delivery hub</em>
                </span>
                <span className="pc-projects">
                  QAMIS · Digital Situation Room · School Accreditation
                </span>
                <span className="pc-tags">
                  <span className="st gov">Government</span>
                  <span className="st edu">Education</span>
                </span>
                <span className="pc-metric">
                  500+ schools · 14+ government datasets · 50% faster processing
                </span>
              </span>
            </button>

            <button className="pin" data-country="botswana" style={{ left: "54%", top: "70%" }}>
              <span className="pin-dot"></span>
              <span className="pin-ring"></span>
              <span className="pin-label">Botswana</span>
              <span className="pin-card">
                <span className="pc-flag">🇧🇼</span>
                <span className="pc-name">Botswana</span>
                <span className="pc-projects">OpenMRS / Bahmni EMR</span>
                <span className="pc-tags">
                  <span className="st health">Healthcare</span>
                </span>
                <span className="pc-metric">
                  EMR deployed from scratch — Pharmacy, LIMS, Billing, Imaging
                </span>
              </span>
            </button>

            <span className="map-hint">Hover a marker</span>
          </div>

          {/* mobile card stack (same content) */}
          <div className="map-stack">
            <article className="country-card">
              <span className="cc-flag">🇷🇼</span>
              <div>
                <h4>
                  Rwanda <span className="cc-sub">primary hub</span>
                </h4>
                <p>QAMIS · Digital Situation Room · School Accreditation</p>
                <div className="cc-tags">
                  <span className="st gov">Government</span>
                  <span className="st edu">Education</span>
                </div>
                <span className="cc-metric">500+ schools · 14+ datasets</span>
              </div>
            </article>
            <article className="country-card">
              <span className="cc-flag">🇧🇼</span>
              <div>
                <h4>Botswana</h4>
                <p>OpenMRS / Bahmni EMR</p>
                <div className="cc-tags">
                  <span className="st health">Healthcare</span>
                </div>
                <span className="cc-metric">EMR from scratch · 4 modules</span>
              </div>
            </article>
            <article className="country-card">
              <span className="cc-flag">🇬🇹</span>
              <div>
                <h4>Guatemala</h4>
                <p>OpenMRS / Bahmni EMR</p>
                <div className="cc-tags">
                  <span className="st health">Healthcare</span>
                </div>
                <span className="cc-metric">Multi-country rollout</span>
              </div>
            </article>
            <article className="country-card">
              <span className="cc-flag">🇨🇦</span>
              <div>
                <h4>
                  Canada <span className="cc-sub">current base</span>
                </h4>
                <p>BSc Computer Science @ UBC Okanagan</p>
                <div className="cc-tags">
                  <span className="st edu">Education</span>
                </div>
                <span className="cc-metric">Kelowna, BC</span>
              </div>
            </article>
          </div>
        </div>

        <div className="impact-stats reveal" data-d="2">
          <div className="is">
            <b>4</b>
            <span>Countries</span>
          </div>
          <div className="is">
            <b>3</b>
            <span>Continents</span>
          </div>
          <div className="is">
            <b>3</b>
            <span>Sectors</span>
          </div>
          <div className="is">
            <b>20+</b>
            <span>Facilities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
