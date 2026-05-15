// src/sections/About.jsx

import { motion } from "framer-motion"
import me from "../assets/me.jpeg"

function About() {
  return (
    <section
      id="about"
      className="
        min-h-screen
        px-6
        md:px-20
        py-24
        relative 
        
      "
    >

      {/* glow */}
      <div className="absolute left-0 top-20 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          bg-white/50
          backdrop-blur-xl
          rounded-[40px]
          p-8
          md:p-14
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* polaroid */}
            <div
              className="
                bg-white
                rounded-[30px]
                p-5
                shadow-2xl
                rotate-[-5deg]
                w-fit
                  bg-gradient-to-b
                  from-pink-200
                  to-pink-400
              "
            >

              <div
                className="
                  w-[280px]
                  h-[360px]
                  rounded-[20px]
                //   bg-gradient-to-b
                //   from-pink-200
                //   to-pink-400
                "
              >
                 <img src={me} alt="Yasmin" />
              </div>

              <p
                className="
                  text-center
                  mt-4
                  text-white
                  text-xl
                "
                style={{ fontFamily: "Pacifico" }}
              >
                Yasmin 
              </p>

            </div>

            {/* floating card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-6
                bottom-10
                bg-[#ffe97d]
                px-5
                py-4
                rounded-2xl
                shadow-xl
                text-pink-900
                font-medium
              "
            >

              Front-End <br />
              Developer 💖

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
              className="
                text-5xl
                md:text-6xl
                text-pink-500
                mb-8
              "
              style={{ fontFamily: "Pacifico" }}
            >
              About Me
            </h2>

            <p
              className="
                text-pink-900/70
                leading-9
                text-lg
                mb-6
              "
            >

              I'm Yasmin, a Front-End Developer passionate
              about building interactive and aesthetic web
              experiences.

            </p>

            <p
              className="
                text-pink-900/70
                leading-9
                text-lg
                mb-6
              "
            >

              I enjoy transforming ideas into dreamy,
              modern and user-friendly interfaces using
              React, Tailwind and creative animations 

            </p>

            <p
              className="
                text-pink-900/70
                leading-9
                text-lg
              "
            >

              My goal is to create websites that feel
              alive, memorable and visually unique.

            </p>

            {/* mini cards */}
            <div className="flex flex-wrap gap-4 mt-10">

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-pink-100
                  text-pink-700
                  font-medium
                "
              >
                React
              </div>

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-pink-100
                  text-pink-700
                  font-medium
                "
              >
                Tailwind
              </div>

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-pink-100
                  text-pink-700
                  font-medium
                "
              >
                Framer Motion
              </div>

              <div
                className="
                  px-5
                  py-3
                  rounded-2xl
                  bg-pink-100
                  text-pink-700
                  font-medium
                "
              >
                UI/UX
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About