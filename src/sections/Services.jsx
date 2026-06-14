import { motion } from "framer-motion"

const services = [
  {
    emoji: "💻",
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web applications using React and modern technologies.",
  },

  {
    emoji: "🎨",
    title: "UI Implementation",
    description:
      "Transforming designs into clean, pixel-perfect, and user-friendly interfaces.",
  },

  {
    emoji: "📱",
    title: "Responsive Design",
    description:
      "Creating seamless experiences across desktop, tablet, and mobile devices.",
  },

  {
    emoji: "⚡",
    title: "API Integration",
    description:
      "Connecting applications with APIs and dynamic data for real-world functionality.",
  },
]

function Services() {
  return (
    <section
      id="services"
      className="
        min-h-screen
        px-6
        md:px-20
        py-24
        relative
      "
    >

      {/* glow */}
      <div className="absolute left-0 top-40 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="
              text-5xl
              md:text-6xl
              text-pink-500
              mb-6
            "
            style={{ fontFamily: "Pacifico" }}
          >
            Things I Love Building 
          </h2>

          <p
            className="
              text-pink-900/70
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            More than code — creating experiences people enjoy using ✨
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                bg-white/40
                backdrop-blur-xl
                border
                border-white/40
                rounded-[35px]
                p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              {/* glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/30 rounded-full blur-[80px]"></div>

              <div className="relative z-10">

                <div className="text-5xl mb-6">
                  {service.emoji}
                </div>

                <h3
                  className="
                    text-2xl
                    text-pink-600
                    font-semibold
                    mb-4
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-pink-900/70
                    leading-8
                  "
                >
                  {service.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Services