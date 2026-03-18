import React, { useEffect, useState } from 'react';
import alexImage from './assets/images/alex.jpg';
import './index.scss';

type Page = 'home' | 'projects' | 'resume';

const stack = [
  'C#',
  '.NET',
  'Java',
  'Python',
  'FastAPI',
  'TypeScript',
  'React',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Kubernetes',
  'Rancher',
  'GitHub Actions',
  'GitLab CI/CD',
  'Jenkins',
  'AWS',
  'Denodo',
  'ODBC',
  'NuGet',
  'OAuth2 / MSAL',
];

const projects = [
  {
    name: 'Razzle Dazzle',
    liveLink: 'https://github.com/alexshi7/RazzleDazzle',
    summary: 'A memory-to-sketch app that turns a personal experience into multiple animated p5.js concepts, then lets the user refine a chosen sketch through feedback.',
    details: 'React, Vite, Node, p5.js, OpenAI API',
  },
  {
    name: 'ColorSwatch Analysis',
    liveLink: 'https://alexshi7.github.io/colorswatch/',
    summary: 'Image color analysis tool with dominant color extraction, previews, and hex output.',
    details: 'JavaScript, Vibrant.js, HTML/CSS',
  },
  {
    name: 'Media Portfolio',
    liveLink: 'https://alexshi7.github.io/mediaportfolio/',
    repoLink: 'https://github.com/alexshi7/mediaportfolio',
    summary: 'A media-focused portfolio site that presents creative work in a clean, browseable format with a polished front-end experience.',
    details: 'React, TypeScript, GitHub Pages',
  },
];

const experiences = [
  {
    period: 'May 2025 - January 2026',
    title: 'Software Engineer Intern',
    org: 'Johns Hopkins University Applied Physics Laboratory',
    summary: 'Built and deployed enterprise internal applications in C# and .NET, integrating company-wide APIs and Denodo workflows on secure Windows infrastructure using GitLab, ODBC, NuGet, Docker, and Rancher. Also contributed to an internal LLM platform by engineering ingestion and training workflows for private model deployment.',
  },
  {
    period: 'May 2024 - August 2024',
    title: 'Software Engineer Intern',
    org: 'MedWatchers',
    summary: 'Developed scalable backend systems in Python with FastAPI on Linux, using AWS Lambda, S3, and PostgreSQL for secure data automation. Also built real-time analytics pipelines, improved CI/CD with GitHub Actions and Docker, and collaborated across compliance and engineering on cloud data governance.',
  },
];

const education = {
  school: 'Cornell University',
  period: '2023 - Current',
  major: 'Computer Science',
  minor: 'AI, Business',
  coursework: [
    'CS 2110 - Object-Oriented Programming and Data Structures',
    'CS 2800 - Discrete Structures',
    'CS 3110 - Data Structures and Functional Programming',
    'CS 3410 - Computer System Organization and Programming',
    'CS 4410 - Operating Systems',
    'CS 4820 - Introduction to Analysis of Algorithms',
    'BTRY 3080 - Probability and Statistics',
    'MATH 2940 - Linear Algebra',
  ],
};

function getPageFromHash(hash: string): Page {
  if (hash === '#projects') {
    return 'projects';
  }

  if (hash === '#resume') {
    return 'resume';
  }

  return 'home';
}

function App() {
  const [page, setPage] = useState<Page>(() => getPageFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash(window.location.hash));
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="site-name" href="#home">Alex Shi</a>
        <nav className="site-nav" aria-label="Primary">
          <a
            className={page === 'home' ? 'is-active' : ''}
            href="#home"
            onClick={() => setPage('home')}
          >
            Home
          </a>
          <a
            className={page === 'projects' ? 'is-active' : ''}
            href="#projects"
            onClick={() => setPage('projects')}
          >
            Projects
          </a>
          <a
            className={page === 'resume' ? 'is-active' : ''}
            href="#resume"
            onClick={() => setPage('resume')}
          >
            Resume
          </a>
        </nav>
      </header>

      <main className="page">
        {page === 'home' ? (
          <section className="about-page">
            <div className="intro-block">
              <img className="portrait" src={alexImage} alt="Alex Shi" />
              <div>
                <p className="eyebrow">About me</p>
                <h1>Alex Shi 史润康</h1>
                <p className="lede">
                  I am a Cornell student studying computer science and economics. I am passionate about building clear, useful products that people enjoy using, and I am interested in all aspects of software development from backend infrastructure to frontend interfaces.
                </p>
                <p className="lede">
                  My industry experience is building full-stack applications in C#/.NET, with additional work in Linux environments, Python services, and React frontends.
                </p>
                <p className="lede">
                  In my free time, I enjoy cooking, playing tennis, running, and watching Auburn football (long story). I also like to build fun projects that explore the intersection of creativity and code, which you can check out on my GitHub.
                </p>
              </div>
            </div>

            <section className="content-block">
              <p className="eyebrow">Tech stack</p>
              <h2>Tools I reach for most</h2>
              <div className="stack-list" aria-label="Tech stack">
                {stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </section>
        ) : page === 'projects' ? (
          <section className="resume-page">
            <section className="content-block projects-page-block">
              <p className="eyebrow">Projects</p>
              <h1>Selected work</h1>
              <p className="section-copy">
                A few projects that represent the kind of interfaces and product work I like building.
              </p>
              <div className="entry-list">
                {projects.map((project) => (
                  <article className="entry" key={project.name}>
                    <div className="entry-top">
                      <h2>{project.name}</h2>
                      <div>
                        <a href={project.liveLink} target="_blank" rel="noreferrer">Live</a>
                        {project.repoLink ? (
                          <>
                            {' · '}
                            <a href={project.repoLink} target="_blank" rel="noreferrer">Repo</a>
                          </>
                        ) : null}
                      </div>
                    </div>
                    <p>{project.summary}</p>
                    <p className="entry-meta">{project.details}</p>
                  </article>
                ))}
              </div>
            </section>
          </section>
        ) : (
          <section className="resume-page">
            <section className="content-block">
              <p className="eyebrow">Education</p>
              <h1>Resume</h1>
              <div className="entry-list">
                <article className="entry">
                  <div className="entry-top">
                    <h2>{education.school}</h2>
                    <span>{education.period}</span>
                  </div>
                  <p className="entry-org">Major: {education.major}</p>
                  <p className="entry-org">Minor: {education.minor}</p>
                  <div className="coursework-block">
                    <p className="entry-org">Relevant Coursework</p>
                    <ul className="coursework-list">
                      {education.coursework.map((course) => (
                        <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            <section className="content-block">
              <p className="eyebrow">Experience</p>
              <h2>Professional experience</h2>
              <p className="section-copy">
                Internships and team roles aligned to my resume, covering enterprise .NET work, backend infrastructure, and product-facing engineering.
              </p>
              <div className="entry-list">
                {experiences.map((experience) => (
                  <article className="entry" key={`${experience.org}-${experience.period}`}>
                    <div className="entry-top">
                      <h3>{experience.title}</h3>
                      <span>{experience.period}</span>
                    </div>
                    <p className="entry-org">{experience.org}</p>
                    <p>{experience.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </section>
        )}
      </main>
      <footer className="site-footer">
        <a href="mailto:ahs285@cornell.edu">ahs285@cornell.edu</a>
        <a href="https://github.com/alexshi7" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alex-shi7/" target="_blank" rel="noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
