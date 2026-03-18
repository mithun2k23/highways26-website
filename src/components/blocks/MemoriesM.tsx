"use client"


import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion"
import { useState, useEffect } from "react"

type Photo = {
  id: number
  src?: string
}

export default function MemoriesM() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const photos: Photo[] = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    src: "",
  }))

  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-20, 20])

  // 🔥 NEXT (RIGHT → LEFT)
  const nextCard = (dir: "left" | "right") => {
    const to = dir === "left" ? -300 : 300

    animate(x, to, {
      duration: 0.5,
      ease: "easeInOut",
      onComplete: () => {
        x.set(0)

        setIndex((prev) =>
          dir === "left"
            ? (prev + 1) % photos.length
            : (prev - 1 + photos.length) % photos.length
        )
      },
    })
  }

  // 🔥 AUTO SHUFFLE (random direction)
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      const dir = Math.random() > 0.5 ? "left" : "right"
      nextCard(dir)
    }, 2500)

    return () => clearInterval(interval)
  }, [paused])

  const visible = [0, 1, 2].map(
    (i) => photos[(index + i + photos.length) % photos.length]
  )

  return (
    <section className="w-full min-h-screen px-6 py-24 text-white md:hidden">
      
      <div className="max-w-md mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">
            Past Highlights
          </h2>
          <p className="text-white/60 mt-2 text-sm">
            Swipe or hold to explore
          </p>
        </div>

        {/* Stack */}
        <div
          className="relative h-[420px]"
          onPointerDown={() => setPaused(true)}
          onPointerUp={() => setPaused(false)}
          onPointerLeave={() => setPaused(false)}
        >
          {visible
            .slice()
            .reverse()
            .map((photo, i) => {
              const isTop = i === 0

              return (
                <motion.div
                  key={photo.id}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 100) {
                      nextCard("right")
                    } else if (info.offset.x < -100) {
                      nextCard("left")
                    } else {
                      animate(x, 0)
                    }
                  }}
                  style={{
                    x: isTop ? x : 0,
                    rotate: isTop ? rotate : 0,
                    zIndex: 10 - i,
                  }}
                  animate={{
                    scale: 1 - i * 0.06,
                    y: i * 12,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="absolute w-full h-[380px] rounded-xl overflow-hidden shadow-xl border border-white/10 bg-white/10 backdrop-blur-md flex items-center justify-center"
                >
                  {photo.src ? (
                    <img
                      src={photo.src}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                      <span className="text-white/40 text-sm font-medium tracking-wide">
                        HIGHWAYS
                      </span>
                    </div>
                  )}
                </motion.div>
              )
            })}
        </div>

        <div className="flex items-center justify-center">
            <Button
                asChild
                className="my-10 md:my-12 
                            px-4 sm:px-6 md:px-8 
                            py-3 sm:py-4 md:py-5 
                            text-base sm:text-lg md:text-xl 
                            font-semibold text-white 
                            bg-[#C61716] 
                            rounded-full
                            transition duration-300 
                            hover:-translate-y-1 hover:shadow-lg"
                >
                <Link to="/glimpse">
                    Explore More
                </Link>
            </Button>
        </div>

      </div>
    </section>
  )
}