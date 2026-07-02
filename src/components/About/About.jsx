import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

             <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-400 text-sm font-medium">
    ✨ About Me
</div>

            <h2 className="mt-4 text-5xl font-bold text-white">
              Who Am I
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
              I'm Aditya, a passionate WordPress and Full Stack Developer
              who enjoys creating premium websites and modern web
              applications. I focus on performance, clean UI,
              responsiveness and building products that users love.
            </p>
            <div className="mt-8 border-l-2 border-cyan-400 pl-4 italic text-slate-400">
  "Every project is another opportunity to become a better developer."
</div>
            
            <div className="mt-12 grid grid-cols-2 gap-5">

  {/* Card 1 */}
  <motion.div
     whileHover={{
    y:-10,
    scale:1.03,
}}
    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition"
  >
    <p className="text-4xl">🎓</p>

    <h3 className="mt-4 text-xl font-semibold text-white">
      Final Year
    </h3>

    <p className="mt-2 text-slate-400">
      Engineering Student
    </p>
  </motion.div>

  {/* Card 2 */}
  <motion.div
     whileHover={{
    y:-10,
    scale:1.03,
}}
    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl"
  >
    <p className="text-4xl">💼</p>

    <h3 className="mt-4 text-xl font-semibold text-white">
      2+
    </h3>

    <p className="mt-2 text-slate-400">
      Years Experience
    </p>
  </motion.div>

  {/* Card 3 */}
  <motion.div
    whileHover={{
    y:-10,
    scale:1.03,
}}
    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl"
  >
    <p className="text-4xl">🚀</p>

    <h3 className="mt-4 text-xl font-semibold text-white">
      20+
    </h3>

    <p className="mt-2 text-slate-400">
      Projects Completed
    </p>
  </motion.div>

  {/* Card 4 */}
  <motion.div
      whileHover={{
    y:-10,
    scale:1.03,
}}
    className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl"
  >
    <p className="text-4xl">🌍</p>

    <h3 className="mt-4 text-xl font-semibold text-white">
      India
    </h3>

    <p className="mt-2 text-slate-400">
      Open to Remote Work
    </p>
  </motion.div>

</div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-10 backdrop-blur-xl">

              <h3 className="text-2xl font-bold text-white">
                My Journey
              </h3>

              <p className="mt-4 text-slate-400">
                I started with curiosity, not experience.

From building WordPress websites to developing modern React applications, every project has taught me something new.

Today, I focus on creating fast, clean and user-friendly digital experiences while constantly improving as a developer.

 
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;