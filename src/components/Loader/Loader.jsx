 import { motion } from "framer-motion";
import profile from "../../assets/profile.png";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050816]"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[170px]"
      />

      {/* Profile */}

      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-44 w-44 rounded-full border border-cyan-400/30"
        />

        {/* Inner Ring */}

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-36 w-36 rounded-full border border-purple-500/30"
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
          className="absolute h-40 w-40 rounded-full bg-cyan-400/20 blur-[60px]"
        />

        {/* Profile Image */}

        <motion.img
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          src={profile}
          alt="Aditya"
          className="relative z-10 h-32 w-32 rounded-full border-[5px] border-cyan-400 object-cover shadow-[0_0_60px_rgba(34,211,238,.55)]"
        />

      </div>

      {/* Name */}

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-10 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-center text-4xl font-black text-transparent md:text-5xl"
      >
        Aditya Yadav
      </motion.h1>

      {/* Subtitle */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 px-6 text-center text-slate-400"
      >
        WordPress Developer • Full Stack Developer
      </motion.p>

      {/* Loading Bar */}

      <div className="mt-12 h-2 w-64 overflow-hidden rounded-full bg-slate-800">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500"
        />

      </div>

      {/* Loading Text */}

      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
        }}
        className="mt-5 text-xs uppercase tracking-[6px] text-slate-500"
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
}

export default Loader;