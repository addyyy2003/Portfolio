 function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/70 bg-[#050816]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <a
          href="#hero"
          className="text-3xl font-extrabold tracking-tight text-white transition duration-300 hover:scale-105"
        >
          Aditya
          <span className="text-cyan-400">.</span>
        </a>

        {/* Navigation */}

        <ul className="hidden items-center gap-10 text-[17px] font-medium text-slate-300 md:flex">

          <li>
            <a
              href="#about"
              className="transition duration-300 hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="transition duration-300 hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="transition duration-300 hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="transition duration-300 hover:text-cyan-400"
            >
              Contact
            </a>
          </li>

          {/* Download CV */}

          <li>
            <a
  href="/Aditya_Yadav_Resume"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
>
  Download CV
</a>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Navbar;