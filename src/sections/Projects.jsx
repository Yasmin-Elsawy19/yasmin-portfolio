// src/sections/Projects.jsx
import { motion } from "framer-motion"
import streamvibe from "../assets/streamvibe.png"
import cafejoy from "../assets/cafejoy.png"
import boosts from "../assets/boosts.png"
import job from "../assets/job.png"
import Zesty from "../assets/Zesty.png"
import toon from "../assets/toon.png"
import dewi from "../assets/dewi.png"

function Projects() {
  const projects = [
    {
      title: "StreamVibe",
      tag: "React.js |CSS | UI/UX",
      description:
        "A modern streaming platform UI with smooth animations, responsive design and premium user experience.",
      image: streamvibe,
      demo: "https://stream-vibe-beta.vercel.app/",
      github: "https://github.com/Yasmin-Elsawy19/StreamVibe",
    },
    {
      title: "Career Tracker Hub",
      tag: "React.js | Tailwind CSS | Chart.js",
      description:
        "A modern career tracking platform with job applications, interview scheduling and offers management.",
      image: job,
      demo: "https://job-application-tracker-sigma-virid.vercel.app/",
      github: "https://github.com/Yasmin-Elsawy19/Job-Application-Tracker",
    },
    {
      title: "ZestyHub",
      tag: "React.js | Tailwind CSS | APIs | React Router",
      description:
        "A food ordering app with vibrant UI, restaurant menus and cart functionality.",
      image: Zesty,
      demo: "https://food-ordering-app-eight-pearl.vercel.app/",
      github: "https://github.com/Yasmin-Elsawy19/Food-Ordering-App",
    },
    {
      title: "Toonverse",
      tag: "React.js | Tailwind CSS | APIs | React Router",
      description:
        "An entertainment app for cartoons with sections to watch, play and create.",
      image: toon,
      demo: "https://toonverse-app.netlify.app/",
      github: "https://github.com/Yasmin-Elsawy19/Toon_Verse",
    },
    {
      title: "CafeJoy",
      tag: "React.js | Tailwind CSS",
      description:
        "A coffee shop ordering website with cozy UI and menu browsing.",
      image: cafejoy,
      demo: "https://cafejoy.netlify.app/",
      github: "https://github.com/YasminElsawy/cafejoy",
    },
    {
      title: "Bosts",
      tag: "JavaScript | APIs",
      description:
        "A social media management dashboard with posts, analytics and engagement tracking.",
      image: boosts,
      demo: "https://bosts.vercel.app/",
      github: "https://github.com/YasminElsawy/bosts",
    },
    {
      title: "Dewi Three",
      tag: "Bootstrap | HTML",
      description:
        "A professional business management template with client management, financial tracking and task automation.",
      image: dewi,
      demo: "https://dewi-three.vercel.app/",
      github: "https://github.com/Yasmin-Elsawy19/Dewi",
    },
  ]

  return (
    <section id="projects" className="min-h-screen px-6 md:px-20 py-24 relative">
      <div className="absolute right-0 top-40 w-72 h-72 bg-pink-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            className="text-5xl md:text-6xl text-pink-500 mb-6"
            style={{ fontFamily: "Pacifico" }}
          >
            My Projects
          </h2>
          <p className="text-pink-900/70 text-lg max-w-2xl leading-8">
            Some dreamy projects I designed and developed
            with modern UI, animations and interactive experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, tag, description, image, demo, github, index }) {
  const direction = index % 2 === 0 ? -100 : 100
  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotate: -1 }}
      className="group bg-white/50 backdrop-blur-xl rounded-[35px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40"
    >
      <div className="bg-pink-100 px-5 py-4 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-pink-300"></div>
        <div className="w-3 h-3 rounded-full bg-pink-400"></div>
        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
      </div>

      <div className="h-[320px] bg-gradient-to-b from-pink-200 to-fuchsia-300 flex items-center justify-center relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          className="w-[85%] h-[75%] rounded-[25px] object-cover shadow-2xl"
        />
        <div className="absolute w-56 h-56 bg-white/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-3xl text-pink-500 font-semibold">{title}</h3>
          <span className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm">{tag}</span>
        </div>
        <p className="text-pink-900/70 leading-8 mb-8">{description}</p>
        <div className="flex gap-4">
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-pink-500 text-white shadow-lg"
          >
            Live Demo
          </motion.a>
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-pink-300 text-pink-600 bg-white/40"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
