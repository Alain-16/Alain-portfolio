/* ============================================================
   SKILLS (static markup; chip -> project highlight in SiteEffects)
   ============================================================ */
export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Tech Stack</span>
          <h2>The tools behind the systems</h2>
          <p>Hover a skill to highlight the projects that put it into production.</p>
        </div>

        <div className="skill-groups" id="skillGroups">
          <div className="skill-cat reveal">
            <h4>
              Languages <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="dsr">
                Ruby
              </span>
              <span className="chip">JavaScript</span>
              <span className="chip">TypeScript</span>
              <span className="chip">Java</span>
              <span className="chip">Python</span>
            </div>
          </div>

          <div className="skill-cat reveal" data-d="1">
            <h4>
              Backend <span className="n">05</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="dsr">
                Ruby on Rails
              </span>
              <span className="chip">Node.js</span>
              <span className="chip" data-proj="emr">
                REST APIs
              </span>
              <span className="chip">Spring</span>
              <span className="chip" data-proj="emr">
                Multi-Tenant Arch
              </span>
            </div>
          </div>

          <div className="skill-cat reveal">
            <h4>
              Frontend <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip">React</span>
              <span className="chip">Next.js</span>
              <span className="chip" data-proj="qamis">
                Custom Dashboards
              </span>
              <span className="chip">Tailwind CSS</span>
            </div>
          </div>

          <div className="skill-cat reveal" data-d="1">
            <h4>
              Databases <span className="n">03</span>
            </h4>
            <div className="chips">
              <span className="chip">PostgreSQL</span>
              <span className="chip">MySQL</span>
              <span className="chip" data-proj="dsr">
                Elasticsearch
              </span>
            </div>
          </div>

          <div className="skill-cat reveal">
            <h4>
              Cloud &amp; DevOps <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip">Docker</span>
              <span className="chip">Azure</span>
              <span className="chip">Linux</span>
              <span className="chip">CI/CD</span>
            </div>
          </div>

          <div className="skill-cat reveal" data-d="1">
            <h4>
              Data &amp; Analytics <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="dsr">
                DHIS2
              </span>
              <span className="chip" data-proj="dsr">
                Logstash
              </span>
              <span className="chip" data-proj="dsr">
                Kibana
              </span>
              <span className="chip" data-proj="qamis">
                KPI Engines
              </span>
            </div>
          </div>

          <div className="skill-cat reveal">
            <h4>
              Healthcare Systems <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="emr">
                OpenMRS
              </span>
              <span className="chip" data-proj="emr">
                Bahmni
              </span>
              <span className="chip" data-proj="emr">
                LIMS
              </span>
              <span className="chip" data-proj="emr">
                HL7 / FHIR
              </span>
            </div>
          </div>

          <div className="skill-cat reveal" data-d="1">
            <h4>
              Methods <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="qamis">
                Offline-First
              </span>
              <span className="chip">Agile</span>
              <span className="chip">System Design</span>
              <span className="chip">Data Migration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
