 import { motion } from "framer-motion";
 import elevibe from "../../assets/elevibe.png";
 import spotify from "../../assets/spotify.png";
function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-20 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-8">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-wider text-cyan-400">
            ✨ PORTFOLIO
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white md:text-6xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            A selection of projects showcasing my expertise in
            <span className="font-medium text-cyan-400">
              {" "}WordPress, React, Node.js
            </span>
            {" "}and building modern, high-performance web experiences.
          </p>
        </motion.div>

        {/* Placeholder */}
        {/* Featured Project */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{ y: -8 }}
  className="grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl lg:grid-cols-2"
>
  {/* Left - Image */}

 {/* Left - Premium Screenshot */}

<div className="relative p-7">

  {/* Top Row */}

  <div className="mb-6 flex items-center justify-between">

    <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
      ⭐ Client Project
    </span>

    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-xl font-bold text-cyan-400">
      01
    </div>
    
  </div>



  {/* Screenshot */}

  <div className="overflow-hidden rounded-3xl border border-slate-700 shadow-[0_0_35px_rgba(34,211,238,.08)]">

    <img
      src={elevibe}
      alt="Elevibe"
      className="rounded-2xl border border-slate-700 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(34,211,238,.25)]"
    />
     {/* Bottom Metrics */}

 <div className="grid grid-cols-3 gap-3 px-6 pt-5 pb-6">

 <a
  href="https://elevibe.in"
  target="_blank"
  rel="noopener noreferrer"
  className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-900"
>
  <div className="text-3xl">🌐</div>

  <p className="mt-3 text-sm text-slate-400">
    Live Website
  </p>

  <h4 className="mt-1 font-semibold text-cyan-400 group-hover:underline">
    elevibe.in →
  </h4>
</a>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center transition duration-300 hover:border-cyan-400">

    <div className="text-3xl">⚡</div>

    <p className="mt-3 text-sm text-slate-400">
      Page Speed
    </p>

    <h4 className="mt-1 font-semibold text-white">
      90+
    </h4>

  </div>

  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center transition duration-300 hover:border-cyan-400">

    <div className="text-3xl">📱</div>

    <p className="mt-3 text-sm text-slate-400">
      Mobile Friendly
    </p>

    <h4 className="mt-1 font-semibold text-white">
      100%
    </h4>

  </div>

</div>
  </div>

</div>


  {/* Right - Content */}

  <div className="flex flex-col justify-between p-10">

    <div>

      <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
        ⭐ Featured Client Project
      </span>

      <h3 className="mt-6 text-4xl font-bold text-white">
        eleVibe
      </h3>

      <p className="mt-2 text-xl font-medium text-cyan-400">
  Career Counselling Platform
</p>

<div className="my-6 h-px bg-gradient-to-r from-cyan-400 via-slate-600 to-transparent" />

{/* Project Info */}

<div className="grid grid-cols-3 gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">

  <div>
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Role
    </p>

    <p className="mt-2 font-semibold text-white">
      👨‍💻 WordPress Developer
    </p>
  </div>

  <div className="border-x border-slate-700 px-4">
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Duration
    </p>

    <p className="mt-2 font-semibold text-white">
      ⏱ 1 Weeks
    </p>
  </div>

  <div className="pl-4">
    <p className="text-xs uppercase tracking-wider text-slate-500">
      Type
    </p>

    <p className="mt-2 font-semibold text-white">
      🏢 Client Project
    </p>
  </div>

</div>

<div className="my-6 h-px bg-gradient-to-r from-cyan-400 via-slate-600 to-transparent" />

<div className="grid gap-6 lg:grid-cols-2">

  <div>
    <h4 className="mb-3 text-xl font-semibold text-white">
      🎯 Challenge
    </h4>

    <p className="leading-7 text-slate-400">
      Build a trustworthy website that clearly communicates eleVibe's
      services while remaining fast, mobile-friendly and easy to manage.
    </p>
  </div>

  <div>
    <h4 className="mb-3 text-xl font-semibold text-white">
      💡 Solution
    </h4>

    <p className="leading-7 text-slate-400">
      Developed a premium WordPress website using Elementor with a clean
      UI, responsive layouts, SEO optimization and strong performance.
    </p>
  </div>

</div>

  {/* Results */}

<div className="mt-10">

  <h4 className="mb-5 flex items-center gap-2 text-xl font-semibold text-white">
    📈 Results
  </h4>

  <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition duration-300 hover:border-green-400 hover:-translate-y-1">
      <p className="text-2xl">✅</p>
      <h5 className="mt-2 font-semibold text-white">
        Responsive Design
      </h5>
    </div>

    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition duration-300 hover:border-green-400 hover:-translate-y-1">
      <p className="text-2xl">🚀</p>
      <h5 className="mt-2 font-semibold text-white">
        Fast Loading
      </h5>
    </div>

    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition duration-300 hover:border-green-400 hover:-translate-y-1">
      <p className="text-2xl">🔍</p>
      <h5 className="mt-2 font-semibold text-white">
        SEO Optimized
      </h5>
    </div>

    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition duration-300 hover:border-green-400 hover:-translate-y-1">
      <p className="text-2xl">🎨</p>
      <h5 className="mt-2 font-semibold text-white">
        Modern UI
      </h5>
    </div>

    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition duration-300 hover:border-green-400 hover:-translate-y-1">
      <p className="text-2xl">📱</p>
      <h5 className="mt-2 font-semibold text-white">
        Mobile Friendly
      </h5>
    </div>

    <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 transition duration-300 hover:border-green-400 hover:-translate-y-1">
      <p className="text-2xl">⚡</p>
      <h5 className="mt-2 font-semibold text-white">
        Performance
      </h5>
    </div>

  </div>

</div>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-3">

        {[
          "WordPress",
          "Elementor",
          "Responsive Design",
          "SEO Optimized",
          "Performance",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {tech}
          </span>
        ))}

      </div>

    </div>

    {/* Buttons */}

    <div className="mt-10 flex gap-4">

      <a
        href="https://elevibe.in"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
      >
        🌐 Visit Website
      </a>

      <button className="rounded-xl border border-slate-700 px-6 py-3 text-white transition duration-300 hover:border-cyan-400 hover:bg-slate-800">
        📖 Read Case Study
      </button>

    </div>

  </div>
</motion.div>

    {/* ==========================
      Spotify Clone Project
========================== */}

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{ y: -8 }}
  className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl"
>
  <div className="grid grid-cols-1 lg:grid-cols-2">

    {/* LEFT CONTENT */}

    <div className="flex flex-col justify-between p-8 md:p-10 order-2 lg:order-1">

      <div>

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
          🎵 Frontend Project
        </span>

        <h3 className="mt-6 text-4xl font-bold text-white">
          Spotify Clone
        </h3>

        <p className="mt-2 text-lg text-green-400">
          Music Streaming Web UI
        </p>

        <div className="my-6 h-px bg-slate-700" />

        <div className="flex flex-wrap items-center gap-3 text-sm">

          <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
            👨‍💻 Frontend
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
            📅 Personal Project
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
            🎨 Responsive UI
          </span>

        </div>

        <p className="mt-8 leading-8 text-slate-400">
          Developed a fully responsive Spotify-inspired music streaming
          interface using HTML, CSS, JavaScript and Bootstrap. Built a
          modern UI with interactive navigation, playlists, music cards,
          responsive layouts and smooth user experience across devices.
        </p>

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "Bootstrap",
            "Responsive Design",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#"
          className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-green-400"
        >
          🎵 Live Demo
        </a>

        <a
          href="#"
          className="rounded-xl border border-slate-700 px-6 py-3 text-white transition duration-300 hover:border-green-500 hover:bg-slate-800"
        >
          💻 GitHub
        </a>

      </div>

    </div>

    {/* RIGHT IMAGE */}

    <div className="relative overflow-hidden order-1 lg:order-2 bg-[#08110d]">

      <img
        src={spotify}
        alt="Spotify Clone"
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#08110d]/40 to-transparent" />

    </div>

  </div>
</motion.div>



      </div>
    </section>
  );
}

export default Projects;