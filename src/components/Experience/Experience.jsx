import { motion } from "framer-motion";

 const experiences = [
  {
    badge: "⭐ Featured Experience",
    badgeColor: "yellow",
    duration: "2024 – Present",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    color: "cyan",
    desc: "Delivered 20+ professional websites for clients using WordPress and the MERN Stack. Managed the complete development lifecycle including client communication, deployment, maintenance, optimization, and technical support.",
  },

  {
    badge: "💼 Internship",
    badgeColor: "purple",
    duration: "2 Months",
    title: "Web Developer",
    company: "Shivay Digital Media",
    color: "purple",
    desc: "Developed and maintained client websites while improving website performance, responsiveness, and overall user experience through real-world client projects.",
  },

  {
    badge: "🌟 Campus Ambassador",
    badgeColor: "green",
    duration: "2023 – 2024",
    title: "Campus Ambassador",
    company: "Viral Fission",
    color: "green",
    desc: "Represented Viral Fission by coordinating student engagement initiatives, promoting campaigns, building communities, and assisting with communication activities.",
  },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] py-24 overflow-hidden"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >

          <span className="px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm">
            💼 EXPERIENCE
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white">
            My Journey
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
            My journey of becoming a WordPress Developer and Full Stack Developer through freelance work and real-world projects.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0,y:50 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.15 }}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className={`rounded-3xl border p-8 backdrop-blur-xl transition-all duration-500
              ${
                exp.color==="cyan"
                ? "border-cyan-400/30 bg-cyan-500/10 hover:shadow-[0_0_40px_rgba(34,211,238,.35)]"
                : exp.color==="purple"
                ? "border-purple-400/30 bg-purple-500/10 hover:shadow-[0_0_40px_rgba(168,85,247,.35)]"
                : "border-green-400/30 bg-green-500/10 hover:shadow-[0_0_40px_rgba(34,197,94,.35)]"
              }`}
            >

             <span
  className={`inline-flex rounded-full px-4 py-2 text-sm font-medium mb-5
  ${
    exp.badgeColor === "yellow"
      ? "border border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
      : exp.badgeColor === "purple"
      ? "border border-purple-400/30 bg-purple-400/10 text-purple-300"
      : "border border-green-400/30 bg-green-400/10 text-green-300"
  }`}
>
  {exp.badge}
</span>

<p className="mt-4 text-cyan-400 font-semibold">
  📅 {exp.duration}
</p>

              <h3 className="mt-4 text-2xl font-bold text-white">
                {exp.title}
              </h3>

              <h4 className="mt-2 text-slate-300">
                {exp.company}
              </h4>

              <p className="mt-6 leading-8 text-slate-400">
                {exp.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}