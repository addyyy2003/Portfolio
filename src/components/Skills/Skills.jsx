 import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaWordpress,
  FaGithub,
  FaRocket,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiElementor,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
   const skillGroups = [
    {
        
      title: "Frontend Development",
      skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
 
  {
    
    title: "Backend Development",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },

   {
  title: "WordPress Development",
  skills: [
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <SiElementor />, name: "Elementor" },
    { icon: "🔍", name: "SEO" },
    { icon: "📱", name: "Responsive Design" },
    { icon: <FaRocket />, name: "Performance" },
  ],
},

  {
    title: "Tools",
    skills: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <VscVscode />, name: "VS Code" },
    ],
  },
];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050816] py-20 md:py-24"
    >
      <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            ⚡ MY SKILLS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Technologies I Work With
          </h2>

          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Building premium WordPress websites and scalable Full Stack
            applications using modern technologies.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
             whileHover={{
    scale:1.1,
    rotate:-2,
    y:-4,
}}
            className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-slate-900/80 p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_45px_rgba(34,211,238,.35)]"
            className="rounded-3xl border border-green-400/30 bg-gradient-to-br from-green-500/10 to-slate-900/80 p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_45px_rgba(34,197,94,.35)]"
            className="rounded-3xl border border-purple-400/30 bg-gradient-to-br from-purple-500/10 to-slate-900/80 p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_45px_rgba(168,85,247,.35)]"
            >

              <h3 className="mb-8 text-2xl font-bold text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">

                {group.skills.map((skill) => (

                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 transition hover:border-cyan-400"
                  >

                    <span className="text-2xl text-cyan-400">
                      {skill.icon}
                    </span>

                    <span className="text-white">
                      {skill.name}
                    </span>

                  </motion.div>

                ))}
 
                

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;