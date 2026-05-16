// src/sections/Hero.jsx

import { motion } from "framer-motion"
import {
  FaHome,
  FaUser,
  FaStar,
  FaFolder,
  FaEnvelope,
} from "react-icons/fa"

import lap from "../assets/lap.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="
        h-[95vh]
        bg-[#f7cadb]
        p-4
        md:p-6
      "
    >

      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          h-full
          rounded-[35px]
          overflow-hidden
          relative
          bg-gradient-to-br
          from-[#e7b4c8]
          via-[#f4bfd3]
          to-[#dca4bd]
          shadow-[0_20px_80px_rgba(0,0,0,0.18)]
          border
          border-white/30
        "
      >

        {/* overlay */}
        <div className="absolute inset-0 bg-black/5"></div>

        {/* huge glows */}
        <div className="absolute top-[-120px] left-[30%] w-[500px] h-[500px] bg-pink-400/30 rounded-full blur-[150px]"></div>

        <div className="absolute bottom-[-120px] right-[10%] w-[400px] h-[400px] bg-fuchsia-300/20 rounded-full blur-[140px]"></div>

        {/* stars */}
        <div className="absolute top-24 left-[45%] text-pink-100 text-3xl">
          ✦
        </div>

        <div className="absolute bottom-32 right-[30%] text-pink-100 text-2xl">
          ✦
        </div>

        <div className="absolute top-52 right-[35%] text-pink-100 text-xl">
          ✦
        </div>

        {/* SIDEBAR */}
        <div
          className="
            absolute
            left-0
            top-0
            w-[95px]
            md:w-[240px]
            h-full
            bg-[#8f5f76]/40
            backdrop-blur-xl
            border-r
            border-white/10
            z-30
            flex
            flex-col
            justify-between
            p-4
          "
        >

          {/* TOP */}
          <div>

            {/* LOGO */}
            <h1
              className="
                text-pink-100
                text-3xl
                hidden
                md:block
                mb-10
              "
              style={{ fontFamily: "Pacifico" }}
            >
              Yasmin
            </h1>

            {/* NAV */}
            <div className="flex flex-col gap-3">

              <a
                href="#home"
                className="
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  bg-pink-300/30
                  text-white
                "
              >
                <FaHome />

                <span className="hidden md:block">
                  Home
                </span>

              </a>

              <a
                href="#about"
                className="
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  text-pink-100
                  hover:bg-white/10
                  duration-300
                "
              >

                <FaUser />

                <span className="hidden md:block">
                  About
                </span>

              </a>

              <a
                href="#skills"
                className="
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  text-pink-100
                  hover:bg-white/10
                  duration-300
                "
              >

                <FaStar />

                <span className="hidden md:block">
                  Skills
                </span>

              </a>

              <a
                href="#projects"
                className="
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  text-pink-100
                  hover:bg-white/10
                  duration-300
                "
              >

                <FaFolder />

                <span className="hidden md:block">
                  Projects
                </span>

              </a>

              <a
                href="#contact"
                className="
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  rounded-2xl
                  text-pink-100
                  hover:bg-white/10
                  duration-300
                "
              >

                <FaEnvelope />

                <span className="hidden md:block">
                  Contact
                </span>

              </a>

            </div>

          </div>

          {/* MUSIC WIDGET */}
          <div
            className="
              hidden
              md:block
              bg-white/10
              rounded-3xl
              p-4
              backdrop-blur-xl
            "
          >

            <p className="text-pink-100 text-sm mb-1">
              Dreamy Vibes
            </p>

            <p className="text-white text-xs opacity-70">
              Lofi Girl
            </p>

            <div className="flex gap-3 mt-4  text-white text-lg">

              <button>⏮</button>

              <button>⏸</button>

              <button>⏭</button>

            </div>

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="pl-[95px] md:pl-[240px] h-full relative z-20">

          {/* HERO CONTENT */}
          <div
            className="
              h-full
              relative
              flex
              items-center
              justify-center
              overflow-hidden
            "
          >

            {/* LEFT SHELF */}
           

            {/* WINDOW */}
            

            {/* MAIN TEXT */}
            <div className="text-center relative z-[100] px-6">

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                  text-pink-100
                  text-2xl
                  mb-2
                "
              >
                Hi, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="
                  text-4xl
                  md:text-7xl
                  text-pink-50
                  drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
                  leading-tight
                "
                style={{ fontFamily: "Pacifico" }}
              >
                Yasmin Elsawy
              </motion.h1>

              {/* role */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="
                  mt-4
                  inline-block
                  px-6
                  py-3
                  rounded-full
                  bg-pink-300/30
                  backdrop-blur-xl
                  text-white
                  border
                  border-white/20
                  font-semibold
                  font-lg
                "
              >
                 Front-End Developer 
              </motion.div>

              {/* paragraph */}
              <p
                className="
                  mt-8
                  text-pink-50
                  max-w-xl
                  mx-auto
                  leading-8
                  text-lg
                "
              >
                I create beautiful, responsive and
                interactive web experiences with modern UI.
              </p>

              {/* button */}
             <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    document.getElementById("timeline").scrollIntoView({ behavior: "smooth" })
  }}
  className="
    mt-6
    px-9
    py-4
    rounded-full
    bg-pink-500
    text-white
    text-lg
    shadow-[0_0_40px_rgba(255,105,180,0.7)]
    hover:bg-pink-400
    duration-300
  "
>
  Explore My World
</motion.button>


              {/* LAPTOP IMAGE */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  mt-6
                  relative
                  z-10
                "
              >

                <img
                  src={lap}
                  alt=""
                  className="
                    w-[320px]
                    md:w-[240px]
                    mx-auto
                    drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                  "
                />

              </motion.div>

            </div>

            {/* DESK */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                h-40
                bg-gradient-to-b
                from-[#f8bfd7]
                to-[#e8a8c2]
                rounded-t-[60px]
                shadow-inner
                z-0
              "
            ></div>

            {/* floating card right */}
            <div
              className="
                hidden
                lg:flex
                absolute
                right-80
                top-52
                w-40
                h-40
                rounded-[35px]
                bg-pink-400/10
                backdrop-blur-xl
                border
                border-pink-100/20
                items-center
                justify-center
                text-white
                text-4xl
                shadow-[0_0_30px_rgba(255,105,180,0.3)]
              "
            >
              ♡
            </div>

            {/* floating card left */}
            <div
              className="
                hidden
                lg:flex
                absolute
                left-[320px]
                bottom-24
                w-44
                h-44
                rounded-[35px]
                bg-pink-300/10
                backdrop-blur-xl
                border
                border-pink-100/20
                items-center
                justify-center
                text-white
                text-4xl
                shadow-[0_0_30px_rgba(255,105,180,0.3)]
              "
            >
              ✦
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero