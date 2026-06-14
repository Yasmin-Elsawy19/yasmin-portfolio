// src/sections/Contact.jsx

import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="
        min-h-screen
        px-6
        md:px-20
        py-24
        relative
        flex
        items-center
        overflow-hidden
      "
    >

      {/* background glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-pink-300 rounded-full blur-[140px] opacity-30"></div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full blur-[130px] opacity-30"></div>

      {/* floating decorations */}
      <div className="absolute top-20 left-20 text-5xl text-pink-200">
        ✦
      </div>

      <div className="absolute bottom-20 right-24 text-4xl text-pink-200">
        ♡
      </div>

      <div className="absolute top-40 right-40 text-3xl text-pink-100">
        ☁
      </div>

      {/* main card */}
      <div
        className="
          max-w-5xl
          mx-auto
          w-full
          bg-white/30
          backdrop-blur-xl
          rounded-[40px]
          p-10
          md:p-16
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          relative
          z-10
          overflow-hidden
          border
          border-white/20
        "
      >

        {/* glow inside card */}
        <div className="absolute top-0 right-0 w-52 h-52 bg-pink-200/40 rounded-full blur-[100px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >

          {/* title */}
          <h2
            className="
              text-5xl
              md:text-6xl
              text-pink-500
              mb-8
            "
            style={{ fontFamily: "Pacifico" }}
          >
            Contact Me
          </h2>

          {/* subtitle */}
          <p
            className="
              text-pink-900/70
              text-lg
              leading-8
              max-w-2xl
              mx-auto
              mb-14
            "
          >

            Let's turn ideas into dreamy digital
            experiences 

          </p>

          {/* buttons */}
          <div className="flex flex-wrap justify-center gap-6">

            {/* github */}
            <motion.a
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Yasmin-Elsawy19"
              target="_blank"
              className="
                px-8
                py-4
                rounded-full
                bg-white/20
                backdrop-blur-xl
                border
                border-white/20
                text-pink-700
                flex
                items-center
                gap-3
                shadow-lg
                hover:bg-white/30
                duration-300
              "
            >

              <FaGithub className="text-xl" />
              Github

            </motion.a>

            {/* linkedin */}
            <motion.a
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/yasmin-elsawy-2864092aa"
              target="_blank"
              className="
                px-8
                py-4
                rounded-full
                bg-white/20
                backdrop-blur-xl
                border
                border-white/20
                text-pink-700
                flex
                items-center
                gap-3
                shadow-lg
                hover:bg-white/30
                duration-300
              "
            >

              <FaLinkedin className="text-xl" />
              LinkedIn

            </motion.a>

            {/* email */}
            <motion.a
              whileHover={{
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yasminelsawy26@gmail.com"
target="_blank"
rel="noopener noreferrer"
              className="
                px-8
                py-4
                rounded-full
                bg-white/20
                backdrop-blur-xl
                border
                border-white/20
                text-pink-700
                flex
                items-center
                gap-3
                shadow-lg
                hover:bg-white/30
                duration-300
              "
            >

              <FaEnvelope className="text-xl" />
              Email

            </motion.a>

          </div>

          {/* currently listening */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="
              mt-14
              inline-flex
              items-center
              gap-4
              px-6
              py-4
              rounded-full
              bg-white/20
              backdrop-blur-xl
              border
              border-white/20
              text-pink-700
              shadow-lg
            "
          >

            <span className="text-2xl">
              🎧
            </span>

            <p>
              Currently coding with lofi & pink vibes
            </p>

          </motion.div>

          {/* footer line */}
          <p
            className="
              mt-16
              text-pink-900/50
              text-sm
              tracking-[4px]
              uppercase
            "
          >
            Designed & Developed by Yasmin 
          </p>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact