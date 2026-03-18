"use client"

import { motion } from "framer-motion"

type Celebrity = {
  id: number
  type: string
  hint: string
  image?: string
}

export default function Celebrity() {
  const celebrities: Celebrity[] = [
    { id: 1, type: "GUEST", hint: "", image: "" },
    { id: 2, type: "GUEST", hint: "", image: "" },
    { id: 3, type: "GUEST", hint: "", image: "" },
  ]

  return (
    <section
      id="celebrities"
      className="w-full px-6 md:px-12 lg:px-20 py-24 min-h-screen text-red-500 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="mb-12 text-left max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-6">
            THE GUESTS
          </h2>
          <p className="text-red-500/60 mt-3 text-sm md:text-base">
            Stay tuned for exciting announcements
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          
          {celebrities.map((celeb) => (
            <motion.div
              key={celeb.id}
              whileHover={{ scale: 1.04 }}
              className="rounded-2xl p-6 md:p-8 text-center border border-gray-200 bg-gray-50/35 hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              
              {/* Image / Placeholder */}
              <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] mx-auto mb-5 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                
                {celeb.image ? (
                  <img
                    src={celeb.image}
                    alt="celebrity"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl md:text-5xl font-black text-black">
                    ?
                  </span>
                )}

              </div>

              {/* Type */}
              <span className="text-black text-xs font-black tracking-[3px] md:tracking-[4px]">
                {celeb.type}
              </span>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mt-3 mb-2">
                BIG REVEAL
              </h3>

              {/* Button */}
              <div className="mt-5 inline-block bg-red-500 text-white px-4 md:px-5 py-2 rounded-full text-xs font-semibold">
                COMING SOON
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}