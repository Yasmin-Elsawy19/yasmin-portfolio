// src/components/BottomNav.jsx
import { motion } from "framer-motion"
import { FaHome, FaUser, FaCode, FaFolderOpen, FaEnvelope, FaRoad } from "react-icons/fa"

function BottomNav() {
  const navItems = [
    { icon: <FaHome />, link: "#home", label: "Home" },
    { icon: <FaUser />, link: "#about", label: "About" },
    { icon: <FaCode />, link: "#skills", label: "Skills" },
    { icon: <FaFolderOpen />, link: "#projects", label: "Projects" },
    { icon: <FaRoad />, link: "#timeline", label: "Journey" }, // ✨ الجديد
    { icon: <FaEnvelope />, link: "#contact", label: "Contact" },
  ]

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-lg rounded-full shadow-lg flex gap-6 px-8 py-3 border border-pink-200 z-50"
    >
      {navItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-pink-500 text-2xl hover:text-pink-600 transition-colors"
          title={item.label}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default BottomNav
