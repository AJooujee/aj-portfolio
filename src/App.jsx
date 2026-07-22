import './App.css'

function App() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Computer Science Portfolio</p>

        <h1>
          Hi, I’m <span>AJ</span>
        </h1>

        <h2>Software Engineer | Backend | AI & Data Systems</h2>

        <p className="intro">
          I build practical software solutions using Python, FastAPI,
          data analysis, forecasting, and modern web technologies.
        </p>

        <div className="buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact" className="secondary">
            Contact Me
          </a>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Selected Work</p>
        <h2>Projects</h2>

        <div className="project-grid">
          <article className="card">
            <h3>AI Decision Layer</h3>
            <p>
              A backend system that turns model outputs into structured
              business decisions, risk assessments, and recommended actions.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>FastAPI</span>
              <span>JSON</span>
            </div>
          </article>

          <article className="card">
            <h3>Demand Forecasting</h3>
            <p>
              A forecasting baseline for estimating future sales and detecting
              demand trends and risk signals.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>Pandas</span>
              <span>Forecasting</span>
            </div>
          </article>

          <article className="card">
            <h3>Next Project</h3>
            <p>
              A new software engineering project will be added here as the
              portfolio grows.
            </p>
            <div className="tags">
              <span>Coming Soon</span>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">Get In Touch</p>
        <h2>Contact</h2>
        <p>
          I am open to software engineering, backend development, and
          entry-level technology opportunities.
        </p>
      </section>
    </main>
  )
}

export default App