"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

type Photo = {
  id: number
  src?: string
}

export default function Memories() {
  const photos: Photo[] = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    src: "",
  }))

  // Grid-based safe positioning
  const positions = useMemo(() => {
    const cols = 5
    const rows = 4

    const cellWidth = 100 / cols
    const cellHeight = 100 / rows

    return photos.map((_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)

      return {
        top:
          row * cellHeight +
          Math.random() * (cellHeight * 0.3), // small randomness
        left:
          col * cellWidth +
          Math.random() * (cellWidth * 0.3),
        rotate: Math.random() * 16 - 8,
        duration: 5 + Math.random() * 4,
      }
    })
  }, [])

  return (
    <section className="hidden md:block relative w-full min-h-screen px-6 md:px-12 lg:px-20 py-24 overflow-hidden text-white">      
      <div className="max-w-7xl mx-auto relative h-full">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Past Highlights
          </h2>
          <p className="text-white/60 mt-3">
            A glimpse into the energy of previous Highways
          </p>
        </div>

        {/* Floating Images */}
        <div className="relative w-full h-[70vh]">
          {photos.map((photo, i) => {
            const pos = positions[i]

            return (
              <motion.div
                key={photo.id}
                className="absolute w-32 md:w-40 lg:w-48 h-40 md:h-52 lg:h-60 rounded-xl overflow-hidden shadow-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
                style={{
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  rotate: `${pos.rotate}deg`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                  zIndex: 10,
                }}
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white/40 text-sm font-medium">
                    HIGHWAYS
                  </span>
                )}
              </motion.div>
            )
          })}
        </div>
        
        <div className="w-full flex justify-center mt-12">
          <Button
            asChild
            variant="ghost"
            className="px-6 py-6 text-lg font-semibold text-white border border-white/20 hover:bg-[#C61716] hover:text-white transition duration-300 hover:-translate-y-1"
          >
            <Link to="/glimpse">
              Explore More →
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}