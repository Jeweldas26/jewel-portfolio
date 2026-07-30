const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C", "Java", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "Machine Learning",
      "Data Science",
    ],
  },
  {
    title: "Database & Tools",
    skills: ["SQL", "Git", "GitHub", "Zapier"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-3">
            My Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & Technologies
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Technologies and tools I have learned and worked with through
            academic projects, personal projects, and professional learning.
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400/50 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Currently Learning */}
        <div className="mt-8 bg-slate-900/70 border border-cyan-400/20 rounded-2xl p-7">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
                Currently Learning
              </p>

              <h3 className="text-2xl font-semibold">
                AI Engineering & Intelligent Systems
              </h3>

              <p className="text-slate-400 mt-2">
                Continuously expanding my knowledge in AI Engineering,
                Generative AI, and AI Agents.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">

              <span className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                AI Engineering
              </span>

              <span className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                Generative AI
              </span>

              <span className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                AI Agents
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;