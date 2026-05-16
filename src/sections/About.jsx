// src/sections/About.jsx

import { motion } from "framer-motion"
import me from "../assets/me.jpeg"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-4 md:px-20 py-12 md:py-24 relative"
    >
      {/* glow */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

      <div
        className="relative max-w-6xl mx-auto bg-white/50 backdrop-blur-xl rounded-[40px] p-6 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* polaroid */}
            <div className="bg-gradient-to-b from-pink-200 to-pink-400 rounded-[30px] p-5 shadow-2xl rotate-[-5deg] w-fit">
              <div className="w-[220px] md:w-[280px] h-[300px] md:h-[360px] rounded-[20px] overflow-hidden">
                <img
                  src={me}
                  alt="Yasmin"
                  className="w-full h-full object-cover rounded-[20px]"
                  loading="lazy"
                />
              </div>
              <p
                className="text-center mt-4 text-white text-lg md:text-xl"
                style={{ fontFamily: "Pacifico" }}
              >
                Yasmin
              </p>
            </div>

            {/* floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="
                absolute
                -right-2 md:-right-8
                top-1/3 md:top-auto
                md:bottom-4
                bg-[#ffe97d]
                px-4 md:px-6
                py-2 md:py-3
                rounded-2xl
                shadow-xl
                text-pink-900
                font-medium
                text-xs md:text-base
              "
            >
              Front-End <br /> Developer 💖
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-6xl text-pink-500 mb-6 md:mb-8"
              style={{ fontFamily: "Pacifico" }}
            >
              About Me
            </h2>

            <p className="text-pink-900/70 text-base md:text-lg leading-7 md:leading-9 mb-4 md:mb-6">
              I'm Yasmin, a Front-End Developer passionate about building interactive and aesthetic web experiences.
            </p>

            <p className="text-pink-900/70 text-base md:text-lg leading-7 md:leading-9 mb-4 md:mb-6">
              I enjoy transforming ideas into dreamy, modern and user-friendly interfaces using React, Tailwind and creative animations.
            </p>

            <p className="text-pink-900/70 text-base md:text-lg leading-7 md:leading-9">
              My goal is to create websites that feel alive, memorable and visually unique.
            </p>

            {/* mini cards */}
            <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10">
              {["React", "Tailwind", "Framer Motion", "UI/UX"].map((skill, i) => (
                <div
                  key={i}
                  className="px-4 md:px-5 py-2 md:py-3 rounded-2xl bg-pink-100 text-pink-700 font-medium text-sm md:text-base"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
