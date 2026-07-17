import { motion } from "framer-motion";
import {
  FaWordpress,
  FaReact,
  FaRocket,
  FaTools,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    icon: <FaWordpress />,
    color: "from-cyan-500 to-blue-600",
    title: "WordPress Development",
    description:
      "Professional WordPress websites built with Elementor or custom solutions for businesses, startups, doctors, and agencies.",
    features: [
      "Responsive Design",
      "SEO Ready",
      "Elementor",
      "WhatsApp Integration",
      "Contact Forms",
      "Deployment",
    ],
  },
  {
    icon: <FaReact />,
    color: "from-blue-500 to-cyan-500",
    title: "React Development",
    description:
      "Modern React applications, dashboards, landing pages and startup MVPs with scalable architecture.",
    features: [
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "Authentication",
      "Firebase",
      "Responsive UI",
    ],
  },
  {
    icon: <FaRocket />,
    color: "from-purple-500 to-pink-500",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to increase leads and showcase your brand professionally.",
    features: [
      "Fast Loading",
      "Mobile First",
      "Lead Forms",
      "Animations",
      "Modern UI",
      "SEO Friendly",
    ],
  },
  {
    icon: <FaChartLine />,
    color: "from-green-500 to-emerald-500",
    title: "Speed & SEO",
    description:
      "Improve website speed, Core Web Vitals, and search engine visibility for a better user experience.",
    features: [
      "PageSpeed",
      "Image Optimization",
      "Caching",
      "Technical SEO",
      "Performance",
      "Core Web Vitals",
    ],
  },
  {
    icon: <FaTools />,
    color: "from-orange-500 to-red-500",
    title: "Website Maintenance",
    description:
      "Keep your website secure and updated with ongoing maintenance and performance monitoring.",
    features: [
      "Bug Fixes",
      "Plugin Updates",
      "Security",
      "Backups",
      "Monitoring",
      "Support",
    ],
  },
  {
    icon: <FaHandshake />,
    color: "from-indigo-500 to-violet-500",
    title: "Long-Term Support",
    description:
      "After launch support to help you manage your website and keep everything running smoothly.",
    features: [
      "1 Month Support",
      "Minor Updates",
      "Training",
      "Quick Response",
      "Consultation",
      "Documentation",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-[#0B1120] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            WHAT I CAN BUILD
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Web Solutions That
            <span className="text-cyan-400"> Help Businesses Grow</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8 text-lg">
            Whether you're launching a startup, redesigning an existing website,
            or building a modern web application, I create fast, scalable,
            responsive solutions tailored to your business goals.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-cyan-400/40"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

              <div className="relative p-8">

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-3xl shadow-lg mb-6`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-7 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-8 flex items-center gap-2 text-cyan-400 font-semibold group-hover:translate-x-2 transition duration-300">
                  Learn More
                  <FaArrowRight />
                </button>

              </div>
            </motion.div>
          ))}

        </div>
                {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-purple-500/10 backdrop-blur-xl p-10 md:p-14 text-center">

            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-cyan-500/20 blur-[120px] rounded-full"></div>
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-purple-500/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10">

              <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                READY TO START?
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
                Let's Build Something Amazing Together
              </h2>

              <p className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-8">
                Whether you need a business website, landing page,
                WordPress solution, or a React application,
                I'd love to discuss your project and help bring your
                ideas to life.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-5">

                <a
                  href="https://wa.me/919372697218?text=Hi%20Aditya,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300 shadow-lg hover:shadow-green-500/30"
                >
                  <FaWhatsapp className="text-2xl" />
                  Let's Talk on WhatsApp
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                >
                  View My Work
                  <FaArrowRight />
                </a>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}