// src/sections/Skills.jsx

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend ",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",  
      "React Hooks",
      "Context API",
      "TypeScript",
      "Tailwind",
      "Redux",
      "Chart.js",
      "Axios",
      "Bootstrap",
    ],
  },

  {
    title: "UI & Animation 💕",
    skills: [
      "Framer Motion",
      "Responsive Design",
      "AOS",
      "Figma",
      "Creative UI",
      "Modern Layouts",
    ],
  },

  {
    title: "Tools 🛠",
    skills: [
      "Git & Github",
      "Netlify",
      "Vercel",
      "VS Code",
      "Chrome DevTools",
      "Postman",
      "Vite",
    ],
  },

  {
    title: "Beyond Coding ",
    skills: [
      "Marketing",
      "Prompt Engineering",
      "Presentation",
      "Communication",
      "Teamwork",
      "Problem Solving",
      "AI Tools",
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="
        min-h-screen
        px-6
        md:px-20
        py-24
        relative
      "
    >

      {/* glow */}
      <div className="absolute left-0 bottom-20 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
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
            My Skills
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
            A mix of coding, creativity and communication ✨
          </p>

        </motion.div>

        {/* categories */}
        <div className="grid lg:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                bg-white/40
                backdrop-blur-xl
                rounded-[35px]
                p-8
                border
                border-white/30
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                relative
                overflow-hidden
              "
            >

              {/* glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/30 rounded-full blur-[80px]"></div>

              {/* category title */}
              <h3
                className="
                  text-3xl
                  text-pink-500
                  mb-8
                  relative
                  z-10
                "
                style={{ fontFamily: "Pacifico" }}
              >
                {category.title}
              </h3>

              {/* skills */}
              <div className="flex flex-wrap gap-4 relative z-10">

                {category.skills.map((skill, skillIndex) => (

                  <motion.div
                    key={skillIndex}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      px-5
                      py-3
                      rounded-full
                      bg-white/50
                      border
                      border-pink-100
                      text-pink-600
                      shadow-md
                      text-sm
                      md:text-base
                    "
                  >
                    {skill}
                  </motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills