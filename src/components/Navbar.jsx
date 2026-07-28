function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          Jewel<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-slate-300 hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition">
            Experience
          </a>

          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar