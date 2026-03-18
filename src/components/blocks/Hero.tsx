import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

const HighwaysLogo = "/assets/logos/highways-logo.png"

export default function Hero() {
  const targetDate = new Date("2026-04-09T00:00:00")

  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const distance = targetDate.getTime() - now

      if (distance <= 0) return

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((distance / (1000 * 60)) % 60)
      const seconds = Math.floor((distance / 1000) % 60)

      setTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-8">

        {/* Logo */}
        <img
          src={HighwaysLogo}
          alt="Highways Logo"
          className="w-auto max-w-[100%] md:max-w-[1000px] max-h-[150px] md:max-h-[300px] object-contain drop-shadow-2xl transition duration-300 scale-75"
        />

        {/* Date */}
        <div className="text-3xl md:mt-8  md:text-6xl font-black tracking-wide italic scale-90">
          APRIL 09, 10, 11
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center gap-3 md:gap-5 md:mt-8 flex-wrap scale-75">
          {[
            { value: time.days, label: "DAYS" },
            { value: time.hours, label: "HOURS" },
            { value: time.minutes, label: "MINS" },
            { value: time.seconds, label: "SECS" },
          ].map(({ value, label }) => (

            <div
              key={label}
              className="
                relative w-[70px] h-[90px] md:w-[90px] md:h-[110px]
                rounded-[14px] overflow-hidden
                backdrop-blur-[10px] bg-white/35

                flex flex-col justify-between

                transition-all duration-300 ease-in-out
                hover:-translate-y-[6px] hover:scale-[1.04]
                hover:shadow-[0_10px_30px_rgba(255,255,255,0.5)]
                group
              "
            >

              {/* TOP NUMBER */}
              <div className="flex-1 flex items-center justify-center">
                <span className="text-[28px] md:text-[36px] font-extrabold text-white">
                  {value}
                </span>
              </div>

              {/* BOTTOM LABEL */}
              <div className="text-center py-[6px] text-[10px] md:text-[12px] tracking-[0.1em] text-white/60">
                {label}
              </div>

            </div>

          ))}
        </div>

        {/* CTA */}
        <Button
          asChild
          variant="ghost"
          className="px-6 py-6 text-lg font-semibold text-white border border-white/20 hover:bg-[#C61716] hover:text-white transition duration-300 hover:-translate-y-1"
        >
          <Link to="/events">
            Explore More →
          </Link>
        </Button>

      </div>
    </section>
  )
}