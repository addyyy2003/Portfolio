import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    setVisible(window.scrollY > 350);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Greeting bubble (shows once after 8 seconds)
  useEffect(() => {
    const shown = sessionStorage.getItem("whatsappGreeting");

    if (!shown) {
      const timer = setTimeout(() => {
        setShowGreeting(true);

        setTimeout(() => {
          setShowGreeting(false);
          sessionStorage.setItem("whatsappGreeting", "true");
        }, 5000);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.8 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="fixed bottom-10 right-10 z-50"
        >
          <div className="group relative">

            {/* Auto Greeting */}
            <AnimatePresence>
              {showGreeting && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-24 right-0 w-72 rounded-3xl border border-white/10 bg-slate-900/95 p-5 backdrop-blur-xl shadow-2xl"
                >
                  <p className="text-white font-semibold">
                    👋 Hi there!
                  </p>

                  <p className="mt-2 text-sm text-slate-300 leading-6">
                    Looking for a website or React application?
                    Let's chat on WhatsApp.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Tooltip */}
             
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-full bg-green-500/40 blur-2xl opacity-70 transition duration-300 group-hover:opacity-100"></div>

            {/* Expandable Button */}
            <motion.a
              href="https://wa.me/919372697218?text=Hi%20Aditya,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"

              whileHover={{
                width: 280,
              }}

              whileTap={{
                scale: 0.96,
              }}

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                y: {
                  repeat: Infinity,
                  duration: 2.8,
                },
              }}

              className="
                group
                relative
                overflow-hidden
                flex
                items-center
                gap-4
                w-16
                h-16
                px-5
                rounded-full
                border
                border-white/10
                bg-slate-900/80
                backdrop-blur-xl
                shadow-[0_15px_40px_rgba(0,0,0,.35)]
                hover:shadow-[0_20px_60px_rgba(34,197,94,.35)]
                focus:outline-none
                focus:ring-4
                focus:ring-green-400/40
              "
            >

              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 blur-md opacity-30"></div>

              </div>

              {/* Ripple */}
              <span className="absolute inset-0 rounded-full border border-green-400 scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></span>

              {/* WhatsApp Icon */}
              <div className="relative flex-shrink-0 z-10">

                <FaWhatsapp
                  size={32}
                  className="text-green-400"
                />

                <span className="absolute -top-1 -right-1">

                  <span className="absolute h-3 w-3 rounded-full bg-green-400 animate-ping"></span>

                  <span className="relative h-3 w-3 rounded-full bg-green-500 border-2 border-slate-900"></span>

                </span>

              </div>
                            {/* Expanding Text (Desktop Only) */}
              <div className="hidden md:flex flex-col whitespace-nowrap overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">

    <span className="font-semibold text-white">
        Start Your Project
 
    </span>

    <span className="text-xs text-green-400">
        ● Online now
    </span>

</div>

              {/* Mobile Notification Dot */}
              <span className="absolute right-2 top-2 flex md:hidden h-4 w-4 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300"></span>
                <span className="relative h-3 w-3 rounded-full border-2 border-slate-900 bg-green-400"></span>
              </span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}