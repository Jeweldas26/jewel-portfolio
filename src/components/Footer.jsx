function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Name */}
        <div className="text-center">

          <h2 className="text-3xl font-bold">
            Jewel <span className="text-cyan-400">Das</span>
          </h2>

          <p className="text-slate-400 mt-3">
            AI Engineer • Machine Learning Enthusiast • Web Developer
          </p>

        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">

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

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-8 text-center">

          <p className="text-slate-500">
            © 2026 Jewel Das. All rights reserved.
          </p>

          <p className="text-slate-600 text-sm mt-2">
            Built with React, Vite & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;