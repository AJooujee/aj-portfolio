import { useEffect, useState } from 'react'
import './App.css'

const menuItems = [
  'Home',
  'About',
  'Education',
  'Skills',
  'Experience',
  'Projects',
  'Resume',
  'Contact',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleMenuClick = (sectionName) => {
    setActiveSection(sectionName.toLowerCase())
    closeMenu()
  }

  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.toLowerCase())

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.05, 0.15, 0.3, 0.5],
      },
    )

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId)

      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-background">
      <div className="portfolio-frame">
        <header className="navbar">
          <div className="nav-container">
            <a
              className="logo"
              href="#home"
              onClick={() => handleMenuClick('Home')}
            >
              AJ PIPATTANAKUN
            </a>

            <button
              className={`menu-button ${menuOpen ? 'active' : ''}`}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((currentState) => !currentState)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav
              className={menuOpen ? 'nav-menu open' : 'nav-menu'}
              aria-label="Main navigation"
            >
              {menuItems.map((item) => {
                const sectionId = item.toLowerCase()
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={item}
                    className={isActive ? 'nav-link active' : 'nav-link'}
                    href={`#${sectionId}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleMenuClick(item)}
                  >
                    {item}
                  </a>
                )
              })}
            </nav>
          </div>
        </header>

        <main>
          <section id="home" className="page-section hero-section">
            <div className="hero-glow hero-glow-left"></div>
            <div className="hero-glow hero-glow-right"></div>

            <div className="hero-content">
              <p className="welcome-message">Welcome to my portfolio</p>

              <h1 className="hero-title">
                <span className="hero-line line-one">
                  Hi, my name is AJ!!
                </span>

                <span className="hero-line line-two">
                  Welcome to my world
                  <span className="typing-cursor"></span>
                </span>
              </h1>

              <p className="hero-description">
                Software Engineering, Backend Development, AI and Data Systems
              </p>

              <a
                className="scroll-button"
                href="#about"
                aria-label="Scroll to About"
                onClick={() => handleMenuClick('About')}
              >
                ↓
              </a>
            </div>

            <div className="mascot-track" aria-hidden="true">
              <div className="mascot-walker">
                <img
                  className="mascot-image"
                  src="/mascot.png"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section id="about" className="page-section about-section">
            <div className="section-heading">
              <h2>About Me</h2>
              <span className="heading-line"></span>
            </div>

            <div className="about-card">
              <div className="about-photo-column">
                <div className="about-photo-frame">
                  <img
                    className="about-photo"
                    src="/about-me.png"
                    alt="AJ Pipattanakun"
                  />
                </div>
              </div>

              <div className="about-content">
                <p>
                  I am a <strong>Computer Science graduate</strong> currently
                  completing a master&apos;s degree in{' '}
                  <strong>Computer Science</strong> at the{' '}
                  <strong>University of Massachusetts Lowell</strong>. I am also
                  gaining practical software engineering experience through my
                  internship at <strong>Tihranix</strong>.
                </p>

                <p>
                  My recent work includes developing backend services with{' '}
                  <strong>Python and FastAPI</strong>, creating structured
                  decision outputs, building a demand forecasting baseline, and
                  working with REST APIs, JSON, Git, GitHub, and Docker. My
                  computer science education has also given me a foundation in{' '}
                  <strong>object-oriented programming</strong>, software design,
                  data structures, and algorithmic problem solving.
                </p>

                <p>
                  I am comfortable working in{' '}
                  <strong>Windows and Linux environments</strong> and using
                  Git-based version control in team projects. I am continuing
                  to strengthen my knowledge of C, C++, secure software
                  development, and object-oriented analysis and design.
                </p>

                <p>
                  I am seeking an entry-level software engineering role where I
                  can contribute to the development, testing, and maintenance
                  of reliable software while continuing to grow as an engineer.
                </p>
              </div>
            </div>
          </section>

          <section
            id="education"
            className="page-section education-section"
          >
            <div className="section-heading">
              <h2>Education</h2>
              <span className="heading-line"></span>

              <p className="education-intro">
                My academic background in computer science, software
                development, artificial intelligence, and data systems.
              </p>
            </div>

            <div className="education-grid">
              <article className="education-card">
                <div className="education-card-header">
                  <div className="education-icon">
                    <img
                      src="/uml-logo.png"
                      alt="University of Massachusetts Lowell logo"
                    />
                  </div>

                  <div>
                    <p className="education-level">Graduate Degree</p>

                    <h3>Master of Science in Computer Science</h3>

                    <p className="education-school">
                      University of Massachusetts Lowell
                    </p>

                    <p className="education-location">
                      Lowell, Massachusetts
                    </p>
                  </div>
                </div>

                <div className="education-meta">
                  <span>Expected Spring 2028</span>
                  <span>In Progress</span>
                </div>

                <div className="education-divider"></div>

                <div className="education-details">
                  <h4>Relevant Coursework</h4>

                  <div className="course-tags">
                    <span>Advanced Computer Science</span>
                    <span>Software Development</span>
                    <span>Artificial Intelligence</span>
                    <span>Data Systems</span>
                  </div>
                </div>
              </article>

              <article className="education-card">
                <div className="education-card-header">
                  <div className="education-icon">
                    <img
                      src="/uml-logo.png"
                      alt="University of Massachusetts Lowell logo"
                    />
                  </div>

                  <div>
                    <p className="education-level">
                      Undergraduate Degree
                    </p>

                    <h3>Bachelor of Science in Computer Science</h3>

                    <p className="education-school">
                      University of Massachusetts Lowell
                    </p>

                    <p className="education-location">
                      Minor in Data Science · Lowell, Massachusetts
                    </p>
                  </div>
                </div>

                <div className="education-meta">
                  <span>September 2020 – August 2024</span>
                  <span>Completed</span>
                </div>

                <div className="education-divider"></div>

                <div className="education-details">
                  <h4>Relevant Coursework</h4>

                  <div className="course-tags">
                    <span>Algorithms</span>
                    <span>Data Structures</span>
                    <span>Object-Oriented Programming</span>
                    <span>Operating Systems</span>
                    <span>Compiler Construction</span>
                    <span>Computer Architecture</span>
                    <span>Machine Learning</span>
                    <span>Mobile Robotics</span>
                    <span>GUI Programming</span>
                    <span>C++ Projects</span>
                    <span>Software Development</span>
                    <span>Data Visualization</span>
                    <span>Statistical Modeling</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="skills" className="page-section">
            <h2>Skills</h2>
            <p>Details coming soon.</p>
          </section>

          <section id="experience" className="page-section">
            <h2>Experience</h2>
            <p>Details coming soon.</p>
          </section>

          <section id="projects" className="page-section">
            <h2>Projects</h2>
            <p>Details coming soon.</p>
          </section>

          <section id="resume" className="page-section">
            <h2>Resume</h2>

            <p className="resume-introduction">
              My resume preview and downloadable PDF will be added here.
            </p>

            <div className="resume-placeholder">
              <span>Resume preview coming soon</span>
            </div>
          </section>

          <section id="contact" className="page-section">
            <h2>Contact</h2>
            <p>Details coming soon.</p>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App