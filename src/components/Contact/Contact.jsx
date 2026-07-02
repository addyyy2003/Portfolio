 import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[170px]" />
      <div className="absolute right-0 bottom-20 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-400">
            📩 CONTACT
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Let's Build Something Amazing
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            Have a project in mind or looking for a WordPress or Full Stack
            Developer? I'd love to connect.
          </p>

        </motion.div>

        {/* Contact Card */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-12 backdrop-blur-xl"
        >

          <div className="grid gap-8 md:grid-cols-2">

            {/* Left */}

            <div>

              <h3 className="text-3xl font-bold text-white">
                Get In Touch
              </h3>

              <p className="mt-6 leading-8 text-slate-400">
                I'm currently open to freelance projects, internships and
                full-time opportunities.
              </p>

              <div className="mt-10 space-y-5">

                <a
                  href="mailto:yadavaditya71456@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 p-4 transition hover:border-cyan-400"
                >
                  <FaEnvelope className="text-cyan-400 text-xl" />
                  <span className="text-white">
                    yadavaditya71456@gmail.com
                  </span>
                </a>

                <a
                  href="tel:+919372697218"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 p-4 transition hover:border-cyan-400"
                >
                  <FaPhone className="text-cyan-400 text-xl" />
                  <span className="text-white">
                    +91 9372697218
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/adityayadav2003"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 p-4 transition hover:border-cyan-400"
                >
                  <FaLinkedin className="text-cyan-400 text-xl" />
                  <span className="text-white">
                    LinkedIn Profile
                  </span>
                </a>

                <a
                  href="https://github.com/addyyy2003"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-slate-700 p-4 transition hover:border-cyan-400"
                >
                  <FaGithub className="text-cyan-400 text-xl" />
                  <span className="text-white">
                    GitHub Profile
                  </span>
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="flex flex-col items-center justify-center rounded-3xl border border-cyan-400/20 bg-cyan-500/5 p-10 text-center">

              <h3 className="text-3xl font-bold text-white">
                Available for Work
              </h3>

              <p className="mt-5 text-slate-400 leading-8">
                Currently looking for
                <span className="text-cyan-400 font-semibold">
                  {" "}WordPress Developer,
                </span>
                <span className="text-purple-400 font-semibold">
                  {" "}Frontend
                </span>
                {" "}and
                <span className="text-green-400 font-semibold">
                  {" "}Full Stack Developer
                </span>
                {" "}roles.
              </p>

              <a
                href="mailto:yadavaditya71456@gmail.com"
                className="mt-10 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
              >
                Hire Me →
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;