

import { motion } from "framer-motion"

const timelineData = [
  {
    year: "2024",
    title: "Started Front-End",
    description:
      "Began my journey learning the fundamentals of Front-End development.",
  },

  {
    year: "2025",
    title: "NTI",
    description:
      "Joined NTI and achieved 98%, building strong technical foundations.",
  },

  {
    year: "2025",
    title: "ITIDA Web Development",
    description:
      "Enrolled in ITIDA Web Development program to sharpen my skills.",
  },

  {
    year: "2025",
    title: "ITIDA Gigs",
    description:
      "Participated in ITIDA Gigs program, gaining practical project experience.",
  },

  {
    year: "2026",
    title: "Gig Program",
    description:
      "Joined the Gig Program to expand professional opportunities and industry exposure.",
  },
]

function Timeline() {
  return (
    <section
      id="timeline"
      className="
        px-6
        md:px-20
        py-32
        relative
        overflow-hidden
      "
    >

      {/* background glows */}
      <div className="absolute left-0 top-40 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute right-0 bottom-20 w-80 h-80 bg-pink-300 rounded-full blur-[130px] opacity-30"></div>

      {/* floating decorations */}
      <div className="absolute top-20 left-20 text-5xl text-pink-200">
        ✦
      </div>

      <div className="absolute right-24 top-52 text-4xl text-pink-100">
        ☁
      </div>

      <div className="absolute bottom-24 left-1/2 text-3xl text-pink-200">
        ♡
      </div>

      {/* title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-28 relative z-10"
      >

        <h2
          className="
            text-5xl
            md:text-7xl
            text-pink-500
            mb-6
          "
          style={{ fontFamily: "Pacifico" }}
        >
          My Journey
        </h2>

        <p
          className="
            text-pink-900/70
            text-lg
            leading-8
            max-w-2xl
            mx-auto
          "
        >
          A timeline of growth, learning and creative
          development 
        </p>

      </motion.div>

      {/* timeline container */}
      <div className="relative mx-auto max-w-6xl">

        {/* center line */}
        <div
          className="
            hidden
            md:block
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            h-full
            w-[6px]
            opacity-70
            rounded-full
            bg-gradient-to-b
            from-pink-300
            via-pink-400
            to-pink-500
          "
        ></div>

        {/* timeline items */}
        <div className="relative flex flex-col gap-24">

          {timelineData.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className={`
                relative
                flex
                items-center
                ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
                }
                justify-center
              `}
            >

              {/* card */}
              <div
                className="
                  relative
                  md:w-[520px]
                  w-full
                  bg-white/45
                  backdrop-blur-xl
                  border
                  border-white/30
                  rounded-[32px]
                  p-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                  overflow-hidden
                "
              >

                {/* glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-200/30 rounded-full blur-[70px]"></div>

                {/* title */}
                <h3
                  className="
                    text-3xl
                    text-pink-600
                    font-bold
                    mb-4
                    relative
                    z-10
                  "
                >
                  {item.title}
                </h3>

                {/* description */}
                <p
                  className="
                    text-pink-900/70
                    leading-8
                    relative
                    z-10
                  "
                >
                  {item.description}
                </p>

              </div>

              {/* desktop year */}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  hidden
                  md:flex
                  items-center
                  justify-center
                  w-20
                  h-20
                  
                  rounded-full
                  bg-gradient-to-br
                  from-pink-400
                  to-pink-500
                  text-white
                  font-bold
                  shadow-[0_10px_30px_rgba(236,72,153,0.4)]
                  border-4
                  border-white
                  z-20
                "
              >
                {item.year}
              </div>

              {/* mobile year */}
              <div
                className="
                  w-0
                  mb-6
                  absolute
                  -top-5
                  right-6
                  md:hidden
                  px-4
                  py-2
                  rounded-full
                  bg-pink-500
                  text-white
                  text-sm
                  font-semibold
                  shadow-lg
                "
              >
                {item.year}
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Timeline