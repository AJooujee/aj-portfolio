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

const skills = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  },
  {
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'SQL',
    iconText: 'SQL',
  },
  {
    name: 'REST APIs',
    iconText: 'API',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    className: 'skill-icon-light',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
  {
    name: 'Windows',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  },
  {
    name: 'Jupyter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
  },
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
  },
  {
    name: 'scikit-learn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  },
  {
    name: 'Postman',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },

    {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'OpenCV',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
  },
  {
    name: 'Anaconda',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg',
  },
  {
    name: 'MATLAB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg',
  },
  {
    name: 'Oracle',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg',
  },

]

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Tihranix',
    location: 'Foxborough, Massachusetts',
    period: 'May 2026 – Present',
    logo: '/tihranix-logo.png',
    responsibilities: [
      'Develop forecasting and decision-intelligence features using FastAPI, Next.js, TypeScript, and Python.',
      'Improve the Forecast Builder so previews respond to selected KPIs, forecasting models, time horizons, and sensitivity drivers.',
      'Connect forecast previews with PLDM-driven context and improve source labeling for live previews, static outputs, and fallback states.',
      'Add model-specific and KPI-specific preview logic for forecast charts, reasoning, accuracy displays, and active model states.',
      'Use Git, GitHub pull requests, Docker, VS Code, and local build validation as part of the team development workflow.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Next.js',
      'TypeScript',
      'Git',
      'GitHub',
      'Docker',
    ],
  },
  {
    role: 'Website Developer and Social Media',
    company: 'Bang Na Thai-Kitchen',
    location: 'North Billerica, Massachusetts',
    period: 'May 2022 – June 2025',
    logo: '/bangna-logo.png',
    responsibilities: [
      'Designed and maintained a responsive restaurant website using HTML, CSS, and JavaScript.',
      'Integrated the online menu and contact forms to make restaurant information and customer communication easier to access.',
      'Updated website content and supported the restaurant’s online presence across digital channels.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const [contactForm, setContactForm] = useState({
  name: '',
  email: '',
  message: '',
})

const handleContactChange = (event) => {
  const { name, value } = event.target

  setContactForm((currentForm) => ({
    ...currentForm,
    [name]: value,
  }))
}

const handleContactSubmit = (event) => {
  event.preventDefault()

  const subject = encodeURIComponent(
    `Portfolio message from ${contactForm.name}`,
  )

  const body = encodeURIComponent(
    `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`,
  )

  window.location.href = `mailto:pipattanakun23aj@gmail.com?subject=${subject}&body=${body}`
}

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

          <section id="skills" className="page-section skills-section">
            <div className="section-heading skills-heading">
              <h2>
                Skills and
                <span> Technologies I&apos;ve Used</span>
              </h2>

              <span className="heading-line"></span>

              <p className="skills-intro">
                Languages, frameworks, development tools, and data technologies
                I have used in coursework, personal projects, and software
                engineering work.
              </p>
            </div>

            <div className="skills-panel">
              <div className="skills-grid">
                {skills.map((skill) => (
                  <article className="skill-card" key={skill.name}>
                    <div className="skill-icon-wrapper">
                      {skill.icon ? (
                        <img
                          className={`skill-icon ${skill.className ?? ''}`}
                          src={skill.icon}
                          alt=""
                          loading="lazy"
                        />
                      ) : (
                        <span className="skill-text-icon">
                          {skill.iconText}
                        </span>
                      )}
                    </div>

                    <p className="skill-name">{skill.name}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="page-section experience-section"
          >
            <div className="section-heading">
              <h2>Experience</h2>
              <span className="heading-line"></span>

              <p className="experience-intro">
                Practical experience in software engineering, web development,
                forecasting systems, and team-based development workflows.
              </p>
            </div>

            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                <article
                  className="experience-item"
                  key={`${experience.company}-${experience.role}`}
                >
                  <div className="timeline-marker" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>

                  <div className="experience-card">
                    <div className="experience-card-header">
                      <div className="experience-logo-wrapper">
                        <img
                          className="experience-logo"
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                        />
                      </div>

                      <div className="experience-heading-content">
                        <div className="experience-title-row">
                          <div>
                            <p className="experience-label">
                              Professional Experience
                            </p>

                            <h3>{experience.role}</h3>

                            <p className="experience-company">
                              {experience.company}
                            </p>

                            <p className="experience-location">
                              {experience.location}
                            </p>
                          </div>

                          <span className="experience-period">
                            {experience.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="experience-divider"></div>

                    <ul className="experience-list">
                      {experience.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>

                    <div className="experience-technologies">
                      {experience.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
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

          <section id="contact" className="page-section contact-section">
            <div className="section-heading">
              <h2>Get In Touch!</h2>
              <span className="heading-line"></span>

              <p className="contact-intro">
                Have a question or want to discuss a software engineering opportunity?
                Send me a message or connect with me online.
              </p>
            </div>

            <div className="contact-container">
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-field">
                  <label htmlFor="contact-name">Your Name</label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email">Email Address</label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    autoComplete="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-message">Message</label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    placeholder="Write your message"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button className="contact-submit-button" type="submit">
                  <span>Send Message</span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="currentColor"
                      d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
                    />
                  </svg>
                </button>
              </form>

              <div className="contact-social-area">
                <p>Connect with me</p>

                <div className="contact-social-links">
                  <a
                    className="social-link"
                    href="https://github.com/AJooujee"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit AJ's GitHub profile"
                    title="GitHub"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      width="27"
                      height="27"
                    >
                      <path
                        fill="currentColor"
                        d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .7Z"
                      />
                    </svg>
                  </a>

                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/aj-c-pipattanakun-62567b334/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit AJ's LinkedIn profile"
                    title="LinkedIn"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      width="27"
                      height="27"
                    >
                      <path
                        fill="currentColor"
                        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.57h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.55V8.99h3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App