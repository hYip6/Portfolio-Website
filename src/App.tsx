import { useEffect, useRef, useState } from 'react'

type Bullet = { label: string; text: string }
type ExperienceItem = {
  type: string
  role: string
  company: string
  period: string
  bullets: Bullet[]
  tech?: string
}
type Project = {
  name: string
  subtitle: string
  tech: string[]
  description: string
  bullets: string[]
  badge?: string
  video?: string
  image?: string
}

const EMAIL = 'houwaiyip06@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/hou-wai-yip-56ba75312/'
const GITHUB = 'https://github.com/hyip6'
const BASE_URL = import.meta.env.BASE_URL

const experience: ExperienceItem[] = [
  {
    type: 'Internship',
    role: 'Software Engineering Intern',
    company: 'AT&T',
    period: 'Summer 2026',
    bullets: [
      { label: 'Data Infrastructure', text: 'Self-taught Databricks from scratch to architect and deploy a real-time anomaly detection pipeline.' },
      { label: 'Algorithm & Execution', text: 'Evaluated multiple anomaly detection models against internal datasets to implement a production-ready solution capable of processing 100+ billion-row tables with a dynamic severity rating system.' },
      { label: 'Integration & Scale', text: 'Encapsulated the detection logic into a Model Context Protocol (MCP) server, creating an accessible, real-time data stream for cross-functional teams and external organizations.' },
    ],
  },
  {
    type: 'Mentorship',
    role: 'Google Software Engineering Program',
    company: 'Google',
    period: 'Fall 2025',
    bullets: [
      { label: 'Algorithmic Problem Solving', text: 'Conducted 1:1 technical syncs with a Senior Google Software Engineer, analyzing LeetCode-style challenges alongside real-world engineering problems and solutions from production systems.' },
      { label: 'Code Quality & Scalability', text: 'Received direct code reviews and actionable feedback, focusing on performance optimization, scalable architecture, and clean code principles.' },
      { label: 'Industry Standards', text: 'Learned production-level software engineering best practices, design patterns, and industry standards from an experienced staff-level engineer.' },
    ],
  },
  {
    type: 'Education',
    role: 'B.S. Computer Science',
    company: 'Stony Brook University',
    period: 'Expected Spring 2028',
    bullets: [
      { label: 'Coursework', text: 'Data Structures, Algorithms, System Fundamentals, Discrete Mathematics, Data Analysis, Software Development.' },
      { label: 'Academic Honors', text: "Dean's List (Fall 2024, Spring 2025, Fall 2025, Spring 2026)." },
    ],
  },
  {
    type: 'Entrepreneurship',
    role: 'Sneaker E-Commerce Business',
    company: 'Founder & Developer',
    period: '2018 — Present',
    bullets: [
      { label: 'Business Background', text: 'Built to scale an independent sneaker reselling business that grew from 1 pair to over 1,000 items in inventory, replacing unscalable spreadsheets with a custom software solution.' },
      { label: 'Deployment & Scale', text: 'Engineered full CRUD operations, advanced search/filtering, and a localized transaction dashboard tracking $6,000+ in transactions, sales metrics, expenses, and net profit.' },
    ],
    tech: 'React · Java · SQLite · Docker',
  },
  {
    type: 'Teaching',
    role: 'Object-Oriented Programming Tutor',
    company: 'Public Library',
    period: '2023 — 2025',
    bullets: [
      { label: 'Instruction', text: 'Taught core CS principles (OOP, Data Structures) in Python to over 15 students with varying experience levels.' },
      { label: 'Mentorship', text: 'Guided students through debugging, code reviews, and problem decomposition, cultivating analytical skills.' },
      { label: 'Curriculum Design', text: 'Developed custom coding projects such as inventory systems to demonstrate real-world OOP applications.' },
    ],
    tech: 'Python · NumPy · Pandas',
  },
  {
    type: 'Automation',
    role: 'Software Automation Intern',
    company: 'Precision Gear',
    period: 'Summer 2024',
    bullets: [
      { label: 'Process Optimization', text: 'Identified time-consuming manual workflows and got management approval to design and deploy automated software solutions.' },
      { label: 'Python Engineering', text: 'Built a custom Python automation tool that reduced document sorting time by 60% across 1,750+ PDF files while automating data entry into internal company tools.' },
      { label: 'Efficiency Impact', text: 'Transformed slow, manual record-keeping into a streamlined, high-speed retrieval workflow for the entire team.' },
    ],
    tech: 'Python · OS · Automation',
  },
]

const projects: Project[] = [
  {
    name: 'METAL',
    subtitle: 'SBU Hacks · Stony Brook University',
    tech: ['Python', 'FFmpeg', 'Whisper', 'MiniLM', 'NLP', 'Semantic Search'],
    badge: 'Second Place',
    video: `${BASE_URL}assets/videos/metal-demo.mp4`,
    description:
      'An AI-powered video platform that helps gamers find memorable moments through natural language search and automatically identify highlights from gameplay footage.',
    bullets: [
      'Built a semantic video search engine using Whisper transcripts and MiniLM embeddings to retrieve relevant gaming clips with timestamped results.',
      'Developed an automated highlight detection pipeline using FFmpeg to analyze audio peaks, volume changes, and scene transitions.',
      'Created an interactive video timeline with suggested highlights, allowing users to preview, adjust, and save their favorite moments.',
    ],
  },
  {
    name: 'Store Signal',
    subtitle: 'AT&T Intern Innovation Challenge · Patent Pending',
    badge: 'National Finalist',
    tech: ['Agentic Workflows', 'Python', 'Multi-Agent Systems', 'JSON Pipelines'],
    description: 'An agentic sales intelligence platform that aggregates local customer demographic data and surfaces upselling opportunities for AT&T sales representatives.',
    bullets: [
      'Architected a multi-agent workflow to aggregate and analyze hyper-local customer demographic data.',
      'Engineered real-time pipelines that output structured JSON payloads to a live analytics dashboard.',
      'Delivered regional trend insights and contextual upselling opportunities to support customer conversations.',
    ],
  },
  {
    name: 'Seawolf Course Finder',
    subtitle: 'Course Recommendation Project · Stony Brook University',
    tech: ['Python', 'Flask', 'Scikit-Learn', 'PyTorch', 'BeautifulSoup', 'JavaScript'],
    description: 'An AI course recommendation engine that helps students navigate thousands of Stony Brook University courses with highly relevant matching.',
    bullets: [
      'Built a full-stack recommendation engine using TF-IDF and cosine similarity, achieving 95%+ relevance across 4,000+ courses.',
      'Created concurrent web-scraping infrastructure to extract structured catalog data across 60+ departments.',
    ],
  },
  {
    name: 'Pairs Trading Algorithm',
    subtitle: 'Financial Analysis Track · Stony Brook University Datathon',
    badge: 'Datathon Winner',
    tech: ['Python', 'Pandas', 'Matplotlib', 'NumPy'],
    description: 'A statistical pairs trading strategy that identifies correlated assets and exploits price divergences while managing risk.',
    bullets: [
      'Applied statistical analysis to identify correlated assets and capitalize on temporary price divergences.',
      'Backtested on historical data, generating positive alpha relative to the S&P 500 while maintaining stable risk parameters.',
    ],
  },
  {
    name: 'Accessibility Extension',
    subtitle: '10th Annual Grace Hopper Hackathon · Stony Brook University',
    badge: 'Hackathon Winner',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome API', 'DOM'],
    description: 'A Chrome extension that improves digital reading accessibility for people with dyslexia and ADHD through Bionic Reading Mode.',
    bullets: [
      'Dynamically bolded parts of words to improve focus and reading speed by 30 percent.',
      'Optimized DOM manipulation for real-time text transformation without disrupting page layout.',
    ],
  },
]

function stampTone(badge?: string) {
  if (!badge) return ''
  if (/winner/i.test(badge)) return ' is-gold'
  if (/national finalist/i.test(badge)) return ' is-blue'
  if (/second place/i.test(badge)) return ' is-silver'
  return ''
}

function DotPortrait({ src, alt }: { src: string; alt: string }) {
  const monoCanvasRef = useRef<HTMLCanvasElement>(null)
  const colorCanvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      const monoCanvas = monoCanvasRef.current
      const colorCanvas = colorCanvasRef.current
      if (!monoCanvas || !colorCanvas) return

      const size = 640
      const step = 4
      const sourceCanvas = document.createElement('canvas')
      const sourceContext = sourceCanvas.getContext('2d', { willReadFrequently: true })
      const monoContext = monoCanvas.getContext('2d')
      const colorContext = colorCanvas.getContext('2d')
      if (!sourceContext || !monoContext || !colorContext) return

      sourceCanvas.width = size
      sourceCanvas.height = size
      monoCanvas.width = size
      monoCanvas.height = size
      colorCanvas.width = size
      colorCanvas.height = size
      const scale = Math.max(size / image.width, size / image.height)
      const width = image.width * scale
      const height = image.height * scale
      const x = (size - width) / 2
      const y = (size - height) / 2

      sourceContext.drawImage(image, x, y, width, height)
      const pixels = sourceContext.getImageData(0, 0, size, size)

      for (const context of [monoContext, colorContext]) {
        context.fillStyle = '#f7f7f7'
        context.fillRect(0, 0, size, size)
      }

      for (let py = step / 2; py < size; py += step) {
        for (let px = step / 2; px < size; px += step) {
          const offset = (Math.floor(py) * size + Math.floor(px)) * 4
          const red = pixels.data[offset]
          const green = pixels.data[offset + 1]
          const blue = pixels.data[offset + 2]
          const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722
          const radius = 0.42 + (1 - luminance / 255) * step * 0.48

          monoContext.fillStyle = '#111'
          monoContext.beginPath()
          monoContext.arc(px, py, radius, 0, Math.PI * 2)
          monoContext.fill()

          colorContext.fillStyle = `rgb(${red} ${green} ${blue})`
          colorContext.beginPath()
          colorContext.arc(px, py, radius, 0, Math.PI * 2)
          colorContext.fill()
        }
      }
    }

    return () => {
      image.onload = null
    }
  }, [src])

  return (
    <div className="dot-portrait" role="img" aria-label={alt}>
      <canvas ref={monoCanvasRef} className="dot-portrait-mono" aria-hidden="true" />
      <canvas ref={colorCanvasRef} className="dot-portrait-color" aria-hidden="true" />
    </div>
  )
}

function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const timeline = timelineRef.current
        if (!timeline) return
        const rect = timeline.getBoundingClientRect()
        const scrollable = Math.max(1, timeline.offsetHeight - window.innerHeight)
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable))
        setActiveIndex(Math.min(experience.length - 1, Math.round(progress * (experience.length - 1))))
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollToExperience = (index: number) => {
    const timeline = timelineRef.current
    if (!timeline) return
    const start = window.scrollY + timeline.getBoundingClientRect().top
    const distance = timeline.offsetHeight - window.innerHeight
    const target = start + (index / (experience.length - 1)) * distance
    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <div className="experience-timeline" ref={timelineRef}>
      <aside className="timeline-rail">
        <p>Experience index</p>
        <ol>
          {experience.map((job, index) => (
            <li className={activeIndex === index ? 'is-active' : ''} key={job.role}>
              <button
                type="button"
                onClick={() => scrollToExperience(index)}
              >
                <i />
                <span><strong>{job.company}</strong>{job.period}</span>
              </button>
            </li>
          ))}
        </ol>
      </aside>

      <div className="timeline-content">
        {experience.map((job, index) => (
          <article
            className={`timeline-item ${activeIndex === index ? 'is-active' : ''}`}
            key={`${job.role}-${job.period}`}
          >
            <div className="timeline-masthead">
              <span>The How Why Chronicle</span>
              <i>Experience archive</i>
            </div>
            <p className="hz-card-meta">{job.type} · {job.period}</p>
            <h3>{job.role}</h3>
            <p className="timeline-company">{job.company}</p>
            <div className="timeline-description">
              {job.bullets.map((bullet) => (
                <p key={bullet.label}><strong>{bullet.label}.</strong> {bullet.text}</p>
              ))}
            </div>
            {job.tech && <code>{job.tech}</code>}
          </article>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="hz-page">
      <header className="hz-header">
        <div className="hz-headline">
          <div className="hz-quote"><span>Building: useful software</span><i /></div>
          <h1>Hou Wai Yip</h1>
          <nav aria-label="Main navigation">
            <i />
            <span>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a> —
              <a href={`mailto:${EMAIL}`}>Email</a> —
              <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
            </span>
          </nav>
        </div>
        <div className="hz-handle"><span>How Why</span></div>
        <article className="hz-profile-row">
          <figure className="hz-profile-image">
            <DotPortrait src={`${BASE_URL}assets/images/profile.png`} alt="Hou Wai Yip" />
          </figure>
          <div>
            <p className="hz-bio">
              I&apos;m Hou Wai <span className="pronunciation">(How Why)</span>, a CS
              student at Stony Brook University and a software engineering intern who enjoys
              building things and solving problems through code. I&apos;m always curious and
              constantly learning, whether it&apos;s through my classes, personal projects,
              or exploring new technologies on my own.
            </p>
            <p className="hz-bio-small">
              When I&apos;m not coding, you&apos;ll probably find me researching stocks and
              investing, tackling interesting problems, staying active, or spending time
              outdoors.
            </p>
          </div>
        </article>
      </header>

      <main>
        <section className="hz-section" id="experience">
          <header className="hz-section-title"><span>⌘</span><h2>Experience</h2></header>
          <ExperienceTimeline />
        </section>

        <section className="hz-section" id="projects">
          <header className="hz-section-title"><span>↗</span><h2>Selected Projects</h2></header>
          <div className="hz-work">
            {projects.map((project, index) => (
              <article
                className={`hz-project hz-project-${index + 1}${project.video ? ' has-video' : ''}`}
                key={project.name}
                onMouseEnter={(event) => {
                  const video = event.currentTarget.querySelector('video')
                  if (video) {
                    video.currentTime = 2
                    void video.play()
                  }
                }}
                onMouseLeave={(event) => {
                  const video = event.currentTarget.querySelector('video')
                  if (video) {
                    video.pause()
                    video.currentTime = 2
                  }
                }}
              >
                <div className="hz-project-art" aria-hidden="true">
                  <div className="hz-art-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {project.badge && (
                      <span className={`hz-art-award${stampTone(project.badge)}`}>
                        <small>Award</small>
                        <strong>{project.badge}</strong>
                      </span>
                    )}
                  </div>
                  {project.name === 'Store Signal' ? (
                    <div className="hz-signal-visual">
                      <div className="hz-signal-customer">
                        <small>Customer profile / 017</small>
                        <strong>$286<sup>.40</sup></strong>
                        <span>monthly spend</span>
                      </div>
                      <div className="hz-signal-compare">
                        <small>Spend compared to local average</small>
                        <div><span>Customer</span><i className="is-customer" /></div>
                        <div><span>Average</span><i className="is-average" /></div>
                      </div>
                      <div className="hz-signal-opportunities">
                        <small>Best opportunities</small>
                        <span>01 / Fiber upgrade</span>
                        <span>02 / Mobile bundle</span>
                        <span>03 / Smart home</span>
                      </div>
                    </div>
                  ) : project.name === 'Pairs Trading Algorithm' ? (
                    <div className="hz-pairs-visual">
                      <div className="hz-pairs-legend">
                        <span className="is-pep">Pepsi</span>
                        <span className="is-ko">Coke</span>
                        <i>Normalized history</i>
                      </div>
                      <svg viewBox="0 0 360 150" className="hz-pairs-chart" role="presentation">
                        <line className="grid" x1="0" y1="28" x2="360" y2="28" />
                        <line className="grid is-mean" x1="0" y1="78" x2="360" y2="78" />
                        <line className="grid" x1="0" y1="128" x2="360" y2="128" />
                        <polyline
                          className="pep"
                          fill="none"
                          points="0,86 30,78 60,82 90,64 120,58 150,44 180,70 210,104 240,90 270,38 300,54 330,80 360,74"
                        />
                        <polyline
                          className="ko"
                          fill="none"
                          points="0,92 30,84 60,88 90,76 120,72 150,62 180,78 210,110 240,98 270,54 300,66 330,86 360,82"
                        />
                        <g className="mark is-sell">
                          <circle cx="150" cy="44" r="3.2" />
                          <text x="150" y="34">Sell</text>
                        </g>
                        <g className="mark is-buy">
                          <circle cx="210" cy="104" r="3.2" />
                          <text x="210" y="122">Buy</text>
                        </g>
                        <g className="mark is-sell">
                          <circle cx="270" cy="38" r="3.2" />
                          <text x="270" y="28">Sell</text>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <div className="hz-art-center">
                      <small>{project.tech[0]}</small>
                      <strong>{project.name}</strong>
                      <div><i /><i /><i /><i /></div>
                    </div>
                  )}
                  {project.image && (
                    <img className="hz-project-image" src={project.image} alt="" />
                  )}
                  {project.video && (
                    <video
                      className="hz-project-video"
                      src={project.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
                <div className="hz-project-copy">
                  <p className="hz-card-meta">{project.subtitle}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <code>{project.tech.join(' · ')}</code>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="hz-footer">
        <p>Hou Wai Yip © {new Date().getFullYear()}</p>
        <div>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>

        </div>
      </footer>
    </div>
  )
}
