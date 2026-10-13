
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>

          <h1>
            I'm <span>Victor George</span>
          </h1>

          <h2>Full Stack Software Developer</h2>

          <p className="description">
            I build modern, responsive, and user-friendly web
            applications. I enjoy solving problems with technology
            and turning ideas into useful digital products.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="btn primary-btn">
              View My Projects ↗
            </Link>

            <Link href="/contact" className="btn secondary-btn">
              Contact Me
            </Link>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/vg09876com-svg"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <span>•</span>

            <Link href="/about">More About Me ↗</Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-icon">{"</>"}</div>

          <h3>Building the Web</h3>
          <p>Learn. Build. Improve. Repeat.</p>

          <div className="tech-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>
      </section>
    </main>
  );
}
