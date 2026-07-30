function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left - Introduction */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 md:p-10">

            <h3 className="text-2xl font-bold mb-6">
              Hello, I'm Jewel.
            </h3>

            <p className="text-slate-300 leading-relaxed mb-6">
              I am a Computer Science and Engineering graduate with a strong
              interest in Artificial Intelligence, Machine Learning, software
              development, and modern web technologies. During my academic
              journey, I developed practical experience by building projects
              involving web applications, machine learning, and automation.
            </p>

            <p className="text-slate-400 leading-relaxed">
              After graduation, I completed a Data Science and Machine
              Learning course and am currently expanding my knowledge through
              an AI Engineering course. I enjoy learning new technologies,
              solving practical problems, and building useful solutions that
              combine software development with intelligent systems.
            </p>

          </div>

          {/* Right - Quick Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">

            {/* Education */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
                Education
              </p>

              <h4 className="text-xl font-semibold">
                BSc in Computer Science & Engineering
              </h4>

              <p className="text-slate-400 mt-1">
                Daffodil International University
              </p>
            </div>

            {/* Current Focus */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
                Current Focus
              </p>

              <h4 className="text-xl font-semibold">
                AI Engineering
              </h4>

              <p className="text-slate-400 mt-1">
                Artificial Intelligence • Machine Learning • AI Agents
              </p>
            </div>

            {/* Interests */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
                Interests
              </p>

              <h4 className="text-xl font-semibold">
                Software & Web Development
              </h4>

              <p className="text-slate-400 mt-1">
                MERN Stack • Python • Data Science • Automation
              </p>
            </div>

            {/* Location */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">
                Location
              </p>

              <h4 className="text-xl font-semibold">
                Bangladesh
              </h4>

              <p className="text-slate-400 mt-1">
                Open to opportunities in technology
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;