import Link from "next/link";

const projects = [
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
      <p>Here are some of the projects I have built while learning.</p>

      {projects.map((project) => (
        <div key={project.title} style={{ margin: "30px 0" }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
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
