const projects = [
  {
    number: "01",
    title: "Home Service Website",
    category: "MERN Stack Web Application",
    description:
      "A web-based platform designed to connect customers with service providers. Users can explore worker profiles, view portfolios, book services, and submit reviews.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Market Basket Analysis",
    category: "Machine Learning & Data Analysis",
    description:
      "A machine learning project that analyzes customer purchasing patterns to identify relationships between products and discover useful product associations.",
    technologies: ["Python", "Pandas", "Machine Learning", "Data Analysis"],
  },
  {
    number: "03",
    title: "Diabetes Detection System",
    category: "Machine Learning Classification",
    description:
      "A machine learning-based classification project that uses health-related features to predict whether a person is likely to have diabetes.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],
  },
  {
    number: "04",
    title: "Email Automation System",
    category: "Workflow Automation",
    description:
      "An automated workflow that collects information through Google Forms and sends email notifications automatically using Zapier, reducing manual communication tasks.",
    technologies: ["Zapier", "Google Forms", "Email Automation"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-3">
            What I've Built
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            A selection of academic and personal projects that demonstrate
            my experience in web development, machine learning, data analysis,
            and workflow automation.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group bg-slate-950/60 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400/50 transition duration-300"
            >

              {/* Number */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-cyan-400 text-sm font-bold tracking-widest">
                  {project.number}
                </span>

                <span className="text-slate-600 group-hover:text-cyan-400 transition duration-300">
                  PROJECT
                </span>

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition duration-300">
                {project.title}
              </h3>

              {/* Category */}
              <p className="text-cyan-400 text-sm font-medium mb-5">
                {project.category}
              </p>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 text-sm rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;