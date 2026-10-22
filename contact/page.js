
import Link from "next/link";

export default function Contact() {
  return (
    <main style={{ padding: "50px 8%", color: "white" }}>
      <h1>Contact Me</h1>

      <p>
        I am interested in software development internships,
        collaborations, and new opportunities.
      </p>

      <h2>GitHub</h2>
      <p>
        <a
          href="https://github.com/vg09876com-svg"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#60a5fa" }}
        >
          Visit my GitHub profile ↗
        </a>
      </p>

      <p>
        Replace this text with your email address:
        vg09876.com@email.com
      </p>

      <Link href="/" style={{ color: "#60a5fa" }}>
        Back to Home
      </Link>
    </main>
  );
}
