import { useState, type CSSProperties } from 'react'

type Section = 'Experience' | 'Projects'

type Bullet = {
  label?: string
  text: string
}

type ExperienceItem = {
  type: string
  role: string
  company: string
  period: string
  bullets: Bullet[]
  tech?: string
  note?: string
}

type Project = {
  name: string
  subtitle: string
  tech: string[]
  description: string
  bullets?: string[]
  badge?: string
  link: string | null
}

const EMAIL = 'houwaiyip06@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/hou-wai-yip-56ba75312/'
const GITHUB = 'https://github.com/hyip6'

const experience: ExperienceItem[] = [
  {
    type: 'Internship',
    role: 'Software Engineering Intern',
    company: 'AT&T',
    period: 'Summer 2026',
    bullets: [
      {
        label: 'Data Infrastructure',
        text: 'Self-taught Databricks from scratch to architect and deploy a real-time anomaly detection pipeline.',
      },
      {
        label: 'Algorithm & Execution',
        text: 'Evaluated multiple anomaly detection models against internal datasets to implement a production-ready solution capable of processing 100+ billion-row tables with a dynamic severity rating system.',
      },
      {
        label: 'Integration & Scale',
        text: 'Encapsulated the detection logic into a Model Context Protocol (MCP) server, creating an accessible, real-time data stream for cross-functional teams and external organizations.',
      },
    ],
  },
  {
    type: 'Mentorship',
    role: 'Google Software Engineering Program',
    company: 'Google',
    period: 'Fall 2025',
    bullets: [
      {
        label: 'Algorithmic Problem Solving',
        text: 'Conducted 1:1 technical syncs with a Senior Google Software Engineer, analyzing LeetCode-style challenges alongside real-world engineering problems and solutions from production systems.',
      },
      {
        label: 'Code Quality & Scalability',
        text: 'Received direct code reviews and actionable feedback, focusing on performance optimization, scalable architecture, and clean code principles.',
      },
      {
        label: 'Industry Standards',
        text: 'Learned production-level software engineering best practices, design patterns, and industry standards from an experienced staff-level engineer.',
      },
    ],
  },
  {
    type: 'Education',
    role: 'B.S. Computer Science',
    company: 'Stony Brook University',
    period: 'Expected Graduation: Spring 2028',
    bullets: [
      {
        label: 'Coursework',
        text: 'Data Structures, Algorithms, System Fundamentals, Discrete Mathematics, Data Analysis, Software Development.',
      },
      {
        label: 'Academic Honors',
        text: "Dean's List (Fall 2024, Spring 2025, Fall 2025, Spring 2026).",
      },
    ],
  },
  {
    type: 'Entrepreneurship',
    role: 'Sneaker E-Commerce Business',
    company: 'Founder & Developer',
    period: '2018 — Present',
    bullets: [
      {
        label: 'Business Background',
        text: 'Built to scale an independent sneaker reselling business that grew from 1 pair to over 1,000 items in inventory, replacing unscalable spreadsheets with a custom software solution.',
      },
      {
        label: 'Deployment & Scale',
        text: 'Engineered full CRUD operations, advanced search/filtering, and a localized transaction dashboard tracking $6,000+$ transactions, sales metrics, expenses, and net profit.',
      },
    ],
    tech: 'React · Java · SQLite · Docker',
  },
  {
    type: 'Teaching',
    role: 'Object-Oriented Programming Tutor',
    company: 'Public Library',
    period: '2023 — 2025',
    bullets: [
      {
        label: 'Instruction',
        text: 'Taught core CS principles (OOP, Data Structures) in Python to over 15 students with varying experience levels.',
      },
      {
        label: 'Mentorship',
        text: 'Guided students through debugging, code reviews, and problem decomposition, cultivating analytical skills.',
      },
      {
        label: 'Curriculum Design',
        text: 'Developed custom coding projects (e.g., inventory systems) to demonstrate real-world OOP applications.',
      },
    ],
    tech: 'Python · NumPy · Pandas',
  },
  {
    type: 'Automation',
    role: 'Software Automation Intern',
    company: 'Precision Gear',
    period: 'Summer 2024',
    bullets: [
      {
        label: 'Process Optimization',
        text: 'Identified time-consuming manual workflows during an office internship and got management approval to design and deploy automated software solutions.',
      },
      {
        label: 'Python Engineering',
        text: 'Built a custom Python automation tool that reduced document sorting time by 60% across 1,750+ PDF files while automating data entry into internal company tools.',
      },
      {
        label: 'Time & Efficiency Impact',
        text: 'Transformed slow, manual record-keeping into a streamlined, high-speed retrieval workflow for the entire team.',
      },
    ],
    tech: 'Python · OS · Automation',
  },
]

const projects: Project[] = [
  {
    name: 'Store Signal',
    subtitle: 'AT&T Intern Innovation Challenge (Patent Pending)',
    badge: 'National Finalist',
    tech: ['Agentic Workflows', 'Python', 'Multi-Agent Systems', 'JSON Pipelines'],
    description:
      'Agentic sales intelligence platform that aggregates local customer demographic dasta and surfaces upselling opportunities for AT&T sales representatives.',
    bullets: [
      'Architected an agentic workflow with multi-agent orchestration to aggregate and analyze hyper-local customer demographic data.',
      'Engineered real-time data pipelines to output structured JSON payloads, powering a live analytics dashboard for sales representatives.',
      'Delivered automated upselling opportunities and regional trend insights to drive contextual customer conversations and boost conversion rates.',
    ],
    link: null,
  },
  {
    name: 'Seawolf Course Finder',
    subtitle: 'Course Recommendation Project · Stony Brook University',
    tech: ['Python', 'Flask', 'Scikit-Learn', 'PyTorch', 'BeautifulSoup', 'JavaScript'],
    description:
      'AI course recommendation engine that helps students navigate 3,500+ courses at Stony Brook University with high relevance matching.',
    bullets: [
      'Developed a full-stack AI recommendation engine using TF-IDF and cosine similarity, achieving 95%+ relevance for 4,000+ courses.',
      'Engineered scalable web scraping infrastructure using BeautifulSoup and concurrent processing to extract structured data from university catalogs across 60+ departments.',
    ],
    link: null,
  },
  {
    name: 'Pairs Trading Algorithm',
    subtitle: 'Financial Analysis Track · Stony Brook University Datathon',
    badge: 'Datathon Winner',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    description:
      'Statistical pairs trading strategy that identifies correlated assets and exploits price divergences while managing risk.',
    bullets: [
      'Designed and implemented a Python-based pairs trading strategy, applying statistical analysis to identify correlated assets and exploit price divergences.',
      'Backtested the algorithm on historical datasets, generating positive alpha relative to the S&P 500 while maintaining risk parameters and stability in diverse market conditions.',
    ],
    link: null,
  },
  {
    name: 'Accessibility Extension',
    subtitle: 'Stony Brook University 10th Annual Grace Hopper Hackathon',
    badge: 'Hackathon Winner',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome API', 'DOM'],
    description:
      'Chrome extension that improves digital reading accessibility for people with dyslexia and ADHD through Bionic Reading Mode.',
    bullets: [
      'Developed a Chrome extension to enhance digital reading accessibility for individuals with dyslexia and ADHD.',
      'Implemented Bionic Reading Mode, dynamically bolding parts of words to improve focus and reading speed by 30 percent.',
      'Optimized DOM manipulation for real-time text transformation without disrupting page layout.',
    ],
    link: null,
  },
]

const companyColor: Record<string, string> = {
  'AT&T': '#00A8E0',
}

const googleLetters: { char: string; color: string }[] = [
  { char: 'G', color: '#4285F4' },
  { char: 'o', color: '#EA4335' },
  { char: 'o', color: '#FBBC05' },
  { char: 'g', color: '#4285F4' },
  { char: 'l', color: '#34A853' },
  { char: 'e', color: '#EA4335' },
]

function CompanyLabel({ company }: { company: string }) {
  const style: CSSProperties = {
    display: 'inline-block',
    fontSize: '0.95rem',
    fontWeight: 500,
    marginBottom: '0.9rem',
  }

  if (company === 'Google') {
    return (
      <span style={style}>
        {googleLetters.map((letter, i) => (
          <span key={`${letter.char}-${i}`} style={{ color: letter.color }}>
            {letter.char}
          </span>
        ))}
      </span>
    )
  }

  return (
    <span style={{ ...style, color: companyColor[company] ?? 'var(--ink-muted)' }}>
      {company}
    </span>
  )
}

const linkStyle: CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--ink-muted)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--ink-faint)',
  paddingBottom: 1,
  transition: 'color 0.15s, border-color 0.15s',
}

export default function App() {
  const [active, setActive] = useState<Section>('Experience')

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflowX: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ position: 'relative', zIndex: 1 }}>
        <header
          className="mb-12"
          style={{
            background:
              'linear-gradient(180deg, #f4f6f8 0%, #ffffff 100%)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '1.75rem 1.5rem 1.5rem',
          }}
        >
          <div className="flex items-center gap-4 mb-7">
            <img
              src="/assets/images/profile.png"
              alt="Hou Wai Yip"
              className="shrink-0 rounded-full object-cover"
              style={{
                width: 64,
                height: 64,
                border: '2px solid var(--border)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.04)',
              }}
            />
            <div>
              <h1
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '2.35rem',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  color: 'var(--ink)',
                  margin: 0,
                  letterSpacing: '0.08em',
                }}
              >
                Hou Wai Yip{' '}
                <span
                  style={{
                    fontFamily: "'Source Sans 3', system-ui, sans-serif",
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'var(--ink-faint)',
                    fontWeight: 400,
                    letterSpacing: 'normal',
                  }}
                >
                  (How Why)
                </span>
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--ink-muted)',
                  marginTop: 6,
                }}
              >
                Software Engineering Intern &nbsp;·&nbsp; CS @ Stony Brook University
              </p>
            </div>
          </div>

          <div
            style={{
              borderLeft: '3px solid var(--ink)',
              paddingLeft: '1.1rem',
              marginBottom: '1.5rem',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.75,
                color: 'var(--ink)',
                margin: '0 0 0.75rem',
              }}
            >
              Software engineering intern and entrepreneur building useful software and turning
              ideas into real-world results while leveraging agentic tools. Constantly
              experimenting with new AI models and technologies, driven by curiosity and a
              commitment to always learning.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--ink-muted)',
                margin: 0,
              }}
            >
              When I'm offline, I spend my time researching investing, solving interesting problems,
              staying physically active, and exploring the outdoors.
            </p>
          </div>

          <div className="flex gap-5 flex-wrap">
            {[
              { label: 'Email', href: `mailto:${EMAIL}` },
              { label: 'LinkedIn', href: LINKEDIN },
              { label: 'GitHub', href: GITHUB },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label === 'Email' ? undefined : '_blank'}
                rel={l.label === 'Email' ? undefined : 'noreferrer'}
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderColor = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--ink-muted)'
                  e.currentTarget.style.borderColor = 'var(--ink-faint)'
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </header>

        <nav
          style={{
            display: 'flex',
            gap: '1.5rem',
            borderBottom: '1px solid var(--border)',
            marginBottom: '2.5rem',
          }}
        >
          {(['Experience', 'Projects'] as Section[]).map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.6rem 0',
                fontSize: '1rem',
                fontWeight: active === s ? 700 : 400,
                color: active === s ? 'var(--ink)' : 'var(--ink-muted)',
                borderBottom:
                  active === s ? '2px solid var(--ink)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'color 0.15s',
              }}
            >
              {s}
            </button>
          ))}
        </nav>

        <main>
          {active === 'Experience' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {experience.map((job) => (
                <article key={`${job.type}-${job.role}`}>
                  <div className="flex items-baseline justify-between mb-1 gap-4">
                    <span
                      style={{
                        fontSize: '0.75rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--ink-muted)',
                        fontWeight: 500,
                      }}
                    >
                      {job.type}
                    </span>
                    <span
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--ink-muted)',
                        fontVariantNumeric: 'tabular-nums',
                        textAlign: 'right',
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      margin: '0 0 0.25rem',
                    }}
                  >
                    {job.role}
                  </h2>

                  <CompanyLabel company={job.company} />

                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                    }}
                  >
                    {job.bullets.map((b) => (
                      <li
                        key={`${b.label ?? ''}-${b.text.slice(0, 24)}`}
                        style={{
                          fontSize: '0.98rem',
                          lineHeight: 1.7,
                          color: 'var(--ink)',
                          paddingLeft: '1rem',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '0.55em',
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            background: 'var(--ink-faint)',
                            display: 'inline-block',
                          }}
                        />
                        {b.label ? (
                          <>
                            <strong style={{ fontWeight: 600 }}>{b.label}:</strong>{' '}
                            <span style={{ color: 'var(--ink-muted)' }}>{b.text}</span>
                          </>
                        ) : (
                          <span style={{ color: 'var(--ink-muted)' }}>{b.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  {(job.tech || job.note) && (
                    <p
                      style={{
                        marginTop: '0.85rem',
                        fontSize: '0.88rem',
                        color: 'var(--ink-faint)',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                      }}
                    >
                      {job.tech ?? job.note}
                    </p>
                  )}

                  <div
                    style={{
                      marginTop: '2rem',
                      height: 1,
                      background: 'var(--border)',
                    }}
                  />
                </article>
              ))}
            </div>
          )}

          {active === 'Projects' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {projects.map((p) => (
                <article
                  key={p.name}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: 6,
                    padding: '1.25rem 1.4rem',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--ink-faint)'
                    e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        margin: 0,
                      }}
                    >
                      {p.name}
                    </h3>
                    {p.badge && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#74540D',
                          background: '#F9E2AF',
                          border: '1px solid #F0D58B',
                          borderRadius: 4,
                          padding: '3px 8px',
                        }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--ink-muted)',
                      margin: '0 0 0.65rem',
                    }}
                  >
                    {p.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      color: 'var(--ink-muted)',
                      margin: '0 0 0.75rem',
                    }}
                  >
                    {p.description}
                  </p>

                  {p.bullets && (
                    <ul
                      style={{
                        margin: '0 0 0.9rem',
                        padding: 0,
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem',
                      }}
                    >
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          style={{
                            fontSize: '0.95rem',
                            lineHeight: 1.65,
                            color: 'var(--ink-muted)',
                            paddingLeft: '1rem',
                            position: 'relative',
                          }}
                        >
                          <span
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: '0.55em',
                              width: 4,
                              height: 4,
                              borderRadius: '50%',
                              background: 'var(--ink-faint)',
                              display: 'inline-block',
                            }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          color: 'var(--ink-muted)',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 3,
                          padding: '2px 8px',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

        </main>

        <footer
          style={{
            marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <span style={{ fontSize: '0.85rem', color: 'var(--ink-faint)' }}>
            Hou Wai Yip · {new Date().getFullYear()}
          </span>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              fontSize: '0.85rem',
              color: 'var(--ink-muted)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--ink-faint)',
              paddingBottom: 1,
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)'
              e.currentTarget.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--ink-muted)'
              e.currentTarget.style.borderColor = 'var(--ink-faint)'
            }}
          >
            {EMAIL}
          </a>
        </footer>
      </div>
    </div>
  )
}
