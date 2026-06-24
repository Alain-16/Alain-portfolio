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
          <p>
            However, The tech industry keeps bringing new tools thats why
            fast-learner is in my blood.
          </p>
        </div>

        <div className="skill-groups" id="skillGroups">
          <div className="skill-cat reveal">
            <h4>
              Languages <span className="n">01</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="dsr">
                Java
              </span>
              <span className="chip">Python</span>
              <span className="chip">C#</span>
              <span className="chip">Typescript</span>
            </div>
          </div>

          <div className="skill-cat reveal" data-d="1">
            <h4>
              Backend <span className="n">05</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="dsr">
                Springboot
              </span>
              <span className="chip">Django</span>
              <span className="chip" data-proj="emr">
                FastAPI
              </span>

              <span className="chip" data-proj="emr">
                .NET
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
                No-SQL database
              </span>
            </div>
          </div>

          <div className="skill-cat reveal">
            <h4>
              Cloud &amp; DevOps <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip">Docker</span>
              <span className="chip">AWS cloud</span>
              <span className="chip">Linux</span>
              <span className="chip">CI/CD</span>
              <span className="chip">Ansible</span>
            </div>
          </div>

          <div className="skill-cat reveal" data-d="1">
            <h4>
              Data &amp; Analytics <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="dsr">
                Pandas
              </span>
              <span className="chip" data-proj="dsr">
                Numpy
              </span>
              <span className="chip" data-proj="dsr">
                PowerBI
              </span>
              <span className="chip" data-proj="qamis">
                ETL data pipelines
              </span>
              <span className="chip" data-proj="qamis">
                DAX
              </span>
            </div>
          </div>

          <div className="skill-cat reveal">
            <h4>
              AI ecosystems <span className="n">04</span>
            </h4>
            <div className="chips">
              <span className="chip" data-proj="emr">
                LangGraph
              </span>
              <span className="chip" data-proj="emr">
                Anthropic SDK
              </span>
              <span className="chip" data-proj="emr">
                Vectors | embeddings
              </span>
              <span className="chip" data-proj="emr">
                RAG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
