
import Link from "next/link";

export default function Contact() {
  return (
    <main className="page-section">
      <p className="eyebrow">LET'S CONNECT</p>

      <h1 className="page-title">
        Contact <span>Me</span>
      </h1>

      <p className="page-description">
        I'm interested in software development internships,
        collaborations, and opportunities to work on real-world
        projects. I'd love to connect!
      </p>

      <div className="contact-card">
        <h2>Get in Touch</h2>

        <div className="contact-item">
          <span className="contact-label">GitHub</span>
          <a
            className="contact-value"
            href="https://github.com/vg09876com-svg"
            target="_blank"
            rel="noreferrer"
          >
            github.com/vg09876com-svg ↗
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Email</span>
          <p className="contact-value">
            Add your email address here
          </p>
        </div>

        <div className="contact-item">
          <span className="contact-label">LinkedIn</span>
          <p className="contact-value">
            Add your LinkedIn profile link here
          </p>
        </div>

        <Link href="/projects" className="btn primary-btn">
          View My Work ↗
        </Link>
      </div>
    </main>
  );
}
