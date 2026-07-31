function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-24 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">

          <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Connect
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            I'm always interested in learning, collaborating, and exploring
            new opportunities. Feel free to reach out if you'd like to connect.
          </p>

        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Contact Information */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 md:p-10">

            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}
              <a
                href="mailto:jeweldas018747@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300">
                  @
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">
                    Email
                  </p>

                  <p className="text-slate-300 group-hover:text-cyan-400 transition duration-300 break-all">
                    jeweldas018747@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jewel-das-1379a11b6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300">
                  in
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">
                    LinkedIn
                  </p>

                  <p className="text-slate-300 group-hover:text-cyan-400 transition duration-300">
                    linkedin.com/in/jewel-das-1379a11b6
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Jeweldas26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300">
                  Git
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">
                    GitHub
                  </p>

                  <p className="text-slate-300 group-hover:text-cyan-400 transition duration-300">
                    github.com/Jeweldas26
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-400">
                  BD
                </div>

                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider">
                    Location
                  </p>

                  <p className="text-slate-300">
                    Bangladesh
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 md:p-10">

            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;