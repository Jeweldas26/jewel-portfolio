const experiences = [
  {
    period: "Professional Experience",
    company: "Robi Axiata Limited",
    role: "General-Warehouse Management Officer",
    description:
      "Worked in warehouse operations at Robi Axiata Limited, supporting inventory management, stock movement, documentation, reporting, and coordination with different teams.",
    responsibilities: [
      "Maintained accurate inventory records and tracked stock movement.",
      "Handled stock receiving and issuing while following established procedures.",
      "Managed warehouse documentation and prepared operational reports.",
      "Used Microsoft Excel and Google Sheets for inventory tracking, records, and reporting.",
      "Supported asset tracking and maintained organized warehouse records.",
      "Coordinated with relevant teams to ensure smooth warehouse operations.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-3">
            My Professional Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Professional experience that helped me develop workplace
            responsibility, communication, coordination, and operational skills.
          </p>

        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2"></div>

          {experiences.map((experience) => (
            <div
              key={experience.company}
              className="relative grid md:grid-cols-2 gap-8"
            >

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-3 h-3 bg-cyan-400 rounded-full border-4 border-slate-950 md:-translate-x-1/2 z-10"></div>

              {/* Left Side */}
              <div className="md:text-right pl-12 md:pl-0 md:pr-12">

                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                  {experience.period}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {experience.company}
                </h3>

              </div>

              {/* Right Side */}
              <div className="pl-12 md:pl-12">

                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-7 hover:border-cyan-400/50 transition duration-300">

                  <h4 className="text-xl font-semibold">
                    {experience.role}
                  </h4>

                  <p className="text-slate-400 leading-relaxed mt-4">
                    {experience.description}
                  </p>

                  <ul className="mt-5 space-y-3">

                    {experience.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="text-cyan-400 mt-1">
                          ▹
                        </span>

                        <span>{item}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;