import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="page-section">
      <div className="contact-header">
        <div className="contact-header-text">
          <p className="eyebrow">LET'S CONNECT</p>

          <h1 className="page-title">
            Contact <span>Me</span>
          </h1>

          <p className="page-description">
            I'm interested in software development internships,
            collaborations, and opportunities to work on real-world
            projects. I'd love to connect!
          </p>
        </div>

        <Image
          src="/profile.jpg"
          alt="My photo"
          width={600}
          height={808}
          priority
          className="profile-img"
        />
      </div>

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
          <a
            className="contact-value"
            href="mailto:vg09876.com@gmail.com"
          >
            vg09876.com@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">LinkedIn</span>
          <a
            className="contact-value"
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/your-username ↗
          </a>
        </div>

        <Link href="/projects" className="btn primary-btn">
          View My Work ↗
        </Link>
      </div>
    </main>
  );
}