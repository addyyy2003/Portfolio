import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-[#050816]">

      <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-12">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent"
        >
          Aditya Yadav
        </motion.h2>

        <p className="mt-4 max-w-xl text-center leading-7 text-slate-400">
          WordPress Developer • Full Stack Developer • Building modern,
          responsive and high-performance web experiences.
        </p>

        <div className="mt-8 flex gap-5">

          <a
            href="https://www.linkedin.com/in/adityayadav2003/"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/addyyy2003"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:yadavaditya71456@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

        </div>

        <a
          href="#home"
          className="mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-black transition hover:scale-110"
        >
          <FaArrowUp />
        </a>

        <div className="mt-10 h-px w-full bg-slate-800" />

        <p className="mt-8 text-center text-sm text-slate-500">
          © 2026 Aditya Yadav. Designed & Developed with React + Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}

export default Footer;