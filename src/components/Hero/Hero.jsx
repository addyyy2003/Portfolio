 import profile from "../../assets/profile.png";
 import { motion } from "framer-motion";

 import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiElementor,
} from "react-icons/si";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050816]">
       
      {/* Background Glow */}

     <motion.div
  animate={{
    y: [0, -25, 0],
    opacity: [0.4, 1, 0.4],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
  className="absolute right-24 top-32 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
 />

<motion.div
  animate={{
    y: [0, 20, 0],
    opacity: [0.3, 1, 0.3],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
  className="absolute left-24 bottom-48 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_25px_#8b5cf6]"
 />
      {/* Container */}

        <div className="relative mx-auto flex min-h-fit flex-col-reverse items-center justify-center gap-4 px-5 pt-2 pb-0 md:min-h-[115vh] md:max-w-7xl md:flex-row md:items-center md:justify-between md:px-8 md:pt-24 md:pb-20">
          <div className="max-w-xl text-center md:text-left">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm md:text-base text-cyan-400">
           👋 Hello, I'm
          </span>
          <h1 className="relative mt-8  text-6xl font-black leading-none md:text-7xl lg:text-8xl">
  <span className="text-white">
    Aditya
  </span>

  <br />
  <div className="absolute left-1/2 top-8 h-28 w-56 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[90px] md:left-[-40px] md:top-10 md:h-32 md:w-72 md:translate-x-0" />
  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
    
    Yadav
  </span>
</h1>

          

          <h2  className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            Helping businesses turn ideas into fast, modern websites that attract customers and drive growth.
            <br />
            
          </h2>
          <div className="mt-6 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500" />

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-slate-400 md:mx-0 md:text-lg md:leading-9">
   I design and develop responsive WordPress websites and React applications that are built for speed, performance, and long-term scalability. Whether you're a startup, agency, or local business, I deliver clean, conversion-focused solutions with transparent communication and reliable support.
</p>
          
          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-start hover:-translate-y-1 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,.45)]">

            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              View Projects →
            </a>

            <a
              href="https://wa.me/919372697218?text=Hi%20Aditya,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project."
              className="rounded-xl border border-slate-600 px-8 py-4 text-white transition duration-300 hover:bg-cyan-400
hover:text-black
hover:border-cyan-400
hover:-translate-y-2"
            >
             Lets's Discuss →
            </a>

          </div>

          {/* Social Icons */}

          <div className="mt-10 flex justify-center gap-5 md:justify-start">

 
            <a
              href="https://www.linkedin.com/in/adityayadav2003/"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
            > 
 
              <FaLinkedin />
            </a>
            <a
  href="https://github.com/addyyy2003"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
>
  <FaGithub />
</a>

            <a
              href="mailto:yadavaditya71456@gmail.com"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
            <a
  href="/Aditya_Yadav_Resume"
  target="_blank"
  rel="noopener noreferrer"
  title="Download Resume"
  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 text-xl text-white transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
>
  <FaDownload />
</a>
 

          </div>

        </div>
      

        {/* RIGHT SIDE */}

          <div className="relative mt-12 flex w-full justify-center md:mt-0 md:w-[52%]">

          {/* Dot Pattern */}

<div className="absolute right-0 top-0 h-[320px] w-[320px] opacity-40">
  <div
    className="h-full w-full"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(168,85,247,.8) 1.5px, transparent 1.5px)",
      backgroundSize: "18px 18px",
    }}
  />
</div>

          {/* Glow Behind Image */}
         <div className="absolute right-8 top-20 h-[420px] w-[420px] rounded-full bg-purple-500/15 blur-[130px]" />
         <div className="absolute h-[470px] w-[470px] rounded-full bg-cyan-500/25 blur-[120px]" />
         <motion.div
  animate={{
    y: [0, -20, 0],
    opacity: [0.5, 1, 0.5],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="absolute right-40 top-0 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_35px_#22d3ee]"
 />

<div className="absolute right-10 top-16 h-[300px] w-[300px] rounded-full bg-purple-600/20 blur-[120px]" />
          {/* Image */}

  <img
  src={profile}
  alt="Aditya"
   
 className="relative z-10 h-[220px] w-[220px] rounded-full border-[4px] border-cyan-400 object-cover transition-all duration-700 shadow-[0_0_80px_rgba(34,211,238,.55)] md:h-[380px] md:w-[380px] md:border-[5px] md:shadow-[0_0_120px_rgba(34,211,238,.55)] hover:shadow-[0_0_170px_rgba(34,211,238,.8)]"
/>
<motion.div
   animate={{
  rotate: 360,
  scale: [1, 1.03, 1],
}}
  transition={{
    duration: 25,
    repeat: Infinity,
    ease: "linear",
  }}
   className="absolute h-[250px] w-[250px] rounded-full border border-cyan-400/20 md:h-[430px] md:w-[430px]"
/>
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [.3,.6,.3]
  }}
  transition={{
    duration:4,
    repeat:Infinity
  }}
  className="absolute h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]"
/>
<div className="absolute h-[260px] w-[260px] rounded-full bg-cyan-500/25 blur-[90px] md:h-[470px] md:w-[470px] md:blur-[120px]" />

         {/* React */}

<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
     
  }}
  className="absolute left-0 top-12 z-20 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl px-5 py-3 text-white backdrop-blur"
>
  <FaReact className="text-2xl text-cyan-400" />
 
   <div>
  <p className="text-xs text-slate-400">
    Frontend
  </p>

  <h4 className="font-semibold">
    React
  </h4>
</div>

</motion.div>
        {/* WordPress */}
        <motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    
  }}
  className="absolute -right-20 top-36 z-20 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 backdrop-blur-xl shadow-xl"
>
  <FaWordpress className="text-xl text-cyan-400 -right-12 top-24 " />
  
  <div>
  <p className="text-xs text-slate-400">
    CMS
  </p>

  <h4 className="font-semibold">
    WordPress
  </h4>
</div>

</motion.div>

          {/* Node */}

          <motion.div
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
    
  }}
  className="absolute -left-12 bottom-16 z-20 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-5 py-3 backdrop-blur-xl shadow-xl"
>
  <FaNodeJs className="text-xl text-green-400 bottom-8 -left-6" />
 
   <div>
  <p className="text-xs text-slate-400">
    Backend
  </p>

  <h4 className="font-semibold">
    Node.js
  </h4>
</div>

</motion.div>

{/* Stats Card */}
 

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute  -bottom-48 left-1/2 w-[520px] -translate-x-1/2 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,.12)]"
>
  <div className="grid grid-cols-3">

    <div className="text-center">
      <h3 className="text-4xl font-bold text-cyan-400">
        2+
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Years
      </p>

      <p className="text-sm text-slate-400">
        Experience
      </p>
    </div>

    <div className="text-center border-x border-slate-700">
      <h3 className="text-4xl font-bold text-cyan-400">
        20+
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Projects
      </p>

      <p className="text-sm text-slate-400">
        Completed
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-4xl font-bold text-cyan-400">
        100%
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Client
      </p>

      <p className="text-sm text-slate-400">
        Satisfaction
      </p>
    </div>
   

  </div>
</motion.div>


        </div>
         </div>
    {/* Technologies */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative z-20 -mt-12 md:mt-10 flex flex-col items-center"
>
  {/* Title */}

  <div className="mb-10 flex items-center gap-5">
    <div className="h-[2px] w-36 bg-gradient-to-r from-transparent to-cyan-400" />

    <h2 className="text-4xl font-semibold text-slate-300">
      Technologies I Work With
    </h2>

    <div className="h-[2px] w-36 bg-gradient-to-l from-transparent to-cyan-400" />
  </div>

  {/* Tech Pills */}

  <div className="flex flex-wrap justify-center gap-5">

    {/* React */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
    >
      <FaReact className="text-2xl text-cyan-400" />
      <span className="text-white">React</span>
    </motion.div>

    {/* WordPress */}
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
    >
      <FaWordpress className="text-2xl text-cyan-400" />
      <span className="text-white">WordPress</span>
    </motion.div>

    {/* Node */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,.25)]"
    >
      <FaNodeJs className="text-2xl text-green-400" />
      <span className="text-white">Node.js</span>
    </motion.div>

    {/* Tailwind */}
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
    >
      <SiTailwindcss className="text-2xl text-cyan-400" />
      <span className="text-white">Tailwind CSS</span>
    </motion.div>

    {/* MongoDB */}
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,.25)]"
    >
      <SiMongodb className="text-2xl text-green-500" />
      <span className="text-white">MongoDB</span>
    </motion.div>

    {/* Express */}
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-slate-300"
    >
      <SiExpress className="text-2xl text-white" />
      <span className="text-white">Express.js</span>
    </motion.div>

    {/* Git */}
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-orange-400"
    >
      <FaGitAlt className="text-2xl text-orange-500" />
      <span className="text-white">Git</span>
    </motion.div>

    {/* Elementor */}
    <motion.div
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, y: -8 }}
      className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 hover:border-pink-400"
    >
      <SiElementor className="text-2xl text-pink-500" />
      <span className="text-white">Elementor</span>
    </motion.div>

   </div>
</motion.div>
  
    {/* Scroll Down */}

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
>
  <p className="mb-3 text-xs tracking-[4px] uppercase text-slate-500">
    Scroll
  </p>

  <div className="flex h-12 w-7 justify-center rounded-full border border-slate-500">
    <motion.div
      animate={{ y: [4, 18, 4] }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
    />
  </div>
</motion.div>

</section>
  );
}

export default Hero;