"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function About({text}:any){
    const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  const words = text.split(" ")

  return (
    <div className="relative max-w-3xl mx-auto mt-8">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF014F]/5 via-[#FF014F]/10 to-[#FF014F]/5 rounded-2xl blur-xl" />

      {/* Main content */}
      <div className="relative">
        {/* Animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF014F]/30 to-transparent h-px top-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF014F]/30 to-transparent h-px bottom-0" />

        <motion.p
          className="relative px-8 py-6 font-semibold text-base md:text-lg leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-1 ${
                word === "passionate" ||
                word === "adaptive" ||
                word === "developer" ||
                word === "full-stack" ||
                word === "functional," ||
                word === "user-focused" ||
                word === "scalable"
                  ? "text-[#FF014F] font-bold bg-gradient-to-r from-[#FF014F] to-[#FF014F]/80 bg-clip-text text-transparent"
                  : "text-neutral-300"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                scale:
                  word === "passionate" ||
                  word === "adaptive" ||
                  word === "developer" ||
                  word === "full-stack" ||
                  word === "functional," ||
                  word === "user-focused" ||
                  word === "scalable"
                    ? 1.05
                    : 1,
                transition: { duration: 0.2 },
              }}
            >
              {word}
            </motion.span>
          ))}

          {/* Accent dots */}
          <motion.span
            className="inline-block ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <span className="inline-flex space-x-1">
              <span className="w-1 h-1 bg-[#FF014F] rounded-full animate-pulse" />
              <span className="w-1 h-1 bg-[#FF014F]/70 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <span className="w-1 h-1 bg-[#FF014F]/50 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
            </span>
          </motion.span>
        </motion.p>

        {/* Side accent lines */}
        <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#FF014F]/50 rounded-tl" />
      <div className="absolute bottom-3 right-5 w-3 h-3 border-r-2 border-b-2 border-[#FF014F]/50 rounded-br" />
      </div>
    </div>
  )
}