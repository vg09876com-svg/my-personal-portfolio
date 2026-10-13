
import Link from "next/link";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Git & GitHub",
];

export default function About() {
  return (
    <main className="page-section">
      <p className="eyebrow">GET TO KNOW ME</p>

      <h1 className="page-title">
        About <span>Me</span>
      </h1>

      <p className="page-description">
        Hello! I'm Victor George, an aspiring Full Stack Software
        Developer currently building my skills through hands-on
        projects and software development training.
      </p>

      <p className="page-description">
        I enjoy turning ideas into useful web applications,
        learning new technologies, and solving problems through
        code. My goal is to keep improving, contribute to real
        software projects, and grow as a developer.
      </p>

      <h2 className="section-heading">My Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

      <div className="page-button">
        <Link href="/projects" className="btn primary-btn">
          Explore My Projects ↗
        </Link>
      </div>
    </main>
  );
}
