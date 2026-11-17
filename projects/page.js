
import Link from "next/link";

const projects = [
  {
    title: "VICKSTACK E-commerce",
    description:
      "A full-stack e-commerce platform where users can register, log in, browse products, add products to their cart, and place orders. It also includes an admin dashboard for managing products and customer orders.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    live: "https://vickstack-frontend.vercel.app",
    github: "https://github.com/vg09876com-svg/vickstack-ecommerce",
  },
  {
    title: "Movie App",
    description: "An app for browsing and filtering movies.",
    github: "https://github.com/vg09876com-svg/movie-app",
  },
  {
    title: "Todo App",
    description: "An app for adding, editing, and filtering tasks.",
    github: "https://github.com/vg09876com-svg/todo-checkpoint",
  },
  {
    title: "User List App",
    description: "An app that fetches users from an API.",
    github: "https://github.com/vg09876com-svg/user-list-app",
  },
];

export default function Projects() {
  return (
    <main style={{ padding: "50px 8%", color: "white" }}>
      <h1>My Projects</h1>

      <p>Here are some of the projects I have built.</p>

      {projects.map((project) => (
        <div
          key={project.title}
          style={{
            margin: "30px 0",
            padding: "25px",
            border: "1px solid #334155",
            borderRadius: "12px",
          }}
        >
          <h2>{project.title}</h2>

          <p>{project.description}</p>

          {project.technologies && (
            <p>
              <strong>Technologies:</strong>{" "}
              {project.technologies.join(" • ")}
            </p>
          )}

          {project.live && (
            <p>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#60a5fa" }}
              >
                View Live Website ↗
              </a>
            </p>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#60a5fa" }}
          >
            View on GitHub ↗
          </a>
        </div>
      ))}

      <Link href="/" style={{ color: "#60a5fa" }}>
        Back to Home
      </Link>
    </main>
  );
}
