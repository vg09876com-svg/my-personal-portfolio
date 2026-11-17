
const projects = [
  {
    title: "VICKSTACK E-commerce",
    description:
      "A full-stack e-commerce platform where users can create accounts, browse products, add items to their cart, and place orders. Includes an admin dashboard for managing products and customer orders.",
    technologies:
      "React · TypeScript · Node.js · Express.js · MongoDB",
    github: "https://github.com/vg09876com-svg/vickstack-ecommerce",
    live: "https://vickstack-frontend.vercel.app",
    number: "01",
  },
  {
    title: "Movie App",
    description:
      "A movie application with search and filtering features, movie details, and page navigation.",
    technologies: "React · JavaScript · React Router",
    github: "https://github.com/vg09876com-svg/movie-app",
    number: "02",
  },
  {
    title: "Todo Checkpoint",
    description:
      "A task management app that allows users to add, edit, and filter their tasks.",
    technologies: "React · JavaScript · CSS",
    github: "https://github.com/vg09876com-svg/todo-checkpoint",
    number: "03",
  },
  {
    title: "User List App",
    description:
      "An application that fetches users from an API, displays loading and error states, and supports searching.",
    technologies: "React · Axios · REST API",
    github: "https://github.com/vg09876com-svg/user-list-app",
    number: "04",
  },
  {
    title: "TypeScript React Checkpoint",
    description:
      "A React project demonstrating TypeScript components, props, and state.",
    technologies: "React · TypeScript",
    github: "https://github.com/vg09876com-svg/typescript-react-checkpoint",
    number: "05",
  },
  {
    title: "Vehicle Management System",
    description:
      "A TypeScript project exploring interfaces, classes, and object-oriented programming.",
    technologies: "TypeScript",
    github: "https://github.com/vg09876com-svg/vehicle-assignment",
    number: "06",
  },
];

export default function Projects() {
  return (
    <main className="page-section">
      <p className="eyebrow">SOME THINGS I'VE BUILT</p>

      <h1 className="page-title">
        My <span>Projects</span>
      </h1>

      <p className="page-description">
        Here are some projects I've built while learning software
        development. Each project helps me strengthen my skills
        and gain practical experience.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-icon">{project.number}</div>

            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <span className="project-tech">
              {project.technologies}
            </span>

            {project.live && (
              <a
                className="project-link"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                View Live Website ↗
              </a>
            )}

            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
