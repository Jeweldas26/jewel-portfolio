import profileImage from "../assets/profile.png"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>

            <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-5">
              Hello There 👋
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              I'm
              <span className="block text-cyan-400 mt-2">
                Jewel Das
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-6">
              Software Developer
              <span className="block text-slate-400 mt-2">
                AI & Machine Learning Enthusiast
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              I enjoy building modern web applications, machine learning
              solutions, and intelligent automation workflows while
              continuously expanding my skills in Artificial Intelligence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">

              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/Jewel_Das_CV.pdf"
                download
                className="px-6 py-3 rounded-lg border border-slate-600 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
              >
                Download CV
              </a>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-sm">

              <a
                href="https://github.com/Jeweldas26"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jewel-das-1379a11b6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="mailto:jeweldas018747@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition"
              >
                Email
              </a>

            </div>

          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Decorative Glow */}
              <div className="absolute -inset-6 bg-cyan-400/10 rounded-full blur-3xl"></div>

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

                <img
                  src={profileImage}
                  alt="Jewel Das"
                  className="w-full h-full object-cover rounded-full border-4 border-cyan-400/40 shadow-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero