/* ============================================================
   PROJECTS (static markup; tilt/glow handled in SiteEffects)
   ============================================================ */
function ViewArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>Impact at scale</h2>
          <p>
            Production systems trusted by governments and healthcare providers — measured by the
            workflows they replaced and the people they reach.
          </p>
        </div>

        <div className="projects-grid">
          {/* FEATURED — QAMIS */}
          <article className="card proj-featured tilt reveal">
            <div className="featured-inner">
              <div>
                <span className="ctx">Government of Rwanda · NESA</span>
                <h3>QAMIS — National Education Quality Assurance</h3>
                <p className="desc">
                  A nationwide quality-assurance platform that moved school inspections off paper
                  and online — with offline-first sync so inspectors in rural areas keep working
                  without connectivity.
                </p>
                <div className="metric-row">
                  <div className="metric">
                    <span className="big">500+</span>
                    <span className="small">
                      schools
                      <br />
                      deployed across
                    </span>
                  </div>
                  <div className="metric">
                    <span className="big">50%</span>
                    <span className="small">
                      faster
                      <br />
                      inspection processing
                    </span>
                  </div>
                </div>
                <div className="stack">
                  <span className="pill">DHIS2</span>
                  <span className="pill">Custom Dashboards</span>
                  <span className="pill">KPI Engine</span>
                  <span className="pill">Offline-First Sync</span>
                </div>
                <span className="view">
                  View details <ViewArrow />
                </span>
              </div>
              <div className="featured-visual">
                <span className="featured-tag">Featured</span>
                <span className="fv-label">[ dashboard preview ]</span>
              </div>
            </div>
          </article>

          {/* DSR */}
          <article className="card proj-featured tilt reveal" data-d="1">
            <div className="featured-inner">
              <div>
                <span className="ctx">Government of Rwanda · Eastern Province</span>
                <h3>Digital Situation Room</h3>
                <p className="desc">
                  Real-time governance dashboards unifying data across four administrative levels —
                  giving leadership a single live view to make decisions on.
                </p>
                <div className="metric-row">
                  <div className="metric">
                    <span className="big">14+</span>
                    <span className="small">
                      government datasets
                      <br />
                      integrated &amp; live
                    </span>
                  </div>
                  <div className="metric">
                    <span className="big">4</span>
                    <span className="small">
                      administrative
                      <br />
                      levels unified
                    </span>
                  </div>
                </div>
                <div className="stack">
                  <span className="pill">Ruby</span>
                  <span className="pill">DHIS2</span>
                  <span className="pill">Elasticsearch</span>
                  <span className="pill">Logstash</span>
                  <span className="pill">Kibana</span>
                </div>
                <span className="view">
                  View details <ViewArrow />
                </span>
              </div>
              <div className="featured-visual">
                <span className="featured-tag">Featured</span>
                <span className="fv-label">[ situation room ]</span>
              </div>
            </div>
          </article>

          {/* EMR */}
          <article className="card proj-featured tilt reveal" data-d="2">
            <div className="featured-inner">
              <div>
                <span className="ctx">Multi-Country · Botswana · Rwanda · Guatemala</span>
                <h3>OpenMRS / Bahmni EMR</h3>
                <p className="desc">
                  Stood up electronic medical records from scratch — Pharmacy, LIMS, Billing and
                  Imaging modules — migrating hundreds of patient records off paper.
                </p>
                <div className="metric-row">
                  <div className="metric">
                    <span className="big">20</span>
                    <span className="small">
                      facilities
                      <br />
                      digitized from paper
                    </span>
                  </div>
                  <div className="metric">
                    <span className="big">3</span>
                    <span className="small">
                      countries
                      <br />
                      deployed across
                    </span>
                  </div>
                </div>
                <div className="stack">
                  <span className="pill">OpenMRS</span>
                  <span className="pill">Bahmni</span>
                  <span className="pill">REST APIs</span>
                  <span className="pill">Multi-Tenant</span>
                </div>
                <span className="view">
                  View details <ViewArrow />
                </span>
              </div>
              <div className="featured-visual">
                <span className="featured-tag">Featured</span>
                <span className="fv-label">[ EMR modules ]</span>
              </div>
            </div>
          </article>

          {/* Accreditation */}
          <article className="card proj-featured tilt reveal" data-d="1">
            <div className="featured-inner">
              <div>
                <span className="ctx">Government of Rwanda</span>
                <h3>School Accreditation Platform</h3>
                <p className="desc">
                  End-to-end digital accreditation with automated certificate issuance — replacing a
                  slow, manual approval chain with a reliable pipeline.
                </p>
                <div className="metric-row">
                  <div className="metric">
                    <span className="big">99%</span>
                    <span className="small">
                      notification
                      <br />
                      delivery rate
                    </span>
                  </div>
                  <div className="metric">
                    <span className="big">50%</span>
                    <span className="small">
                      faster
                      <br />
                      processing time
                    </span>
                  </div>
                </div>
                <div className="stack">
                  <span className="pill">Full-Stack Web</span>
                  <span className="pill">Automated Certs</span>
                  <span className="pill">Workflow Engine</span>
                </div>
                <span className="view">
                  View details <ViewArrow />
                </span>
              </div>
              <div className="featured-visual">
                <span className="featured-tag">Featured</span>
                <span className="fv-label">[ accreditation flow ]</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
