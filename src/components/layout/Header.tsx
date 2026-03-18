import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex justify-center z-50 px-6 md:px-12 lg:px-20">

        <div
          className={`
            w-full flex items-center justify-between px-6 py-3 text-white
            transition-all duration-300 ease-out

            ${scrolled
                ? "max-w-7xl mt-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
                : "max-w-full mt-0 rounded-none bg-transparent border-none shadow-none"
            }
          `}
        >
          {/* LEFT → Logo */}
          <Link to="/" className="text-lg font-semibold tracking-tight">
            <img
              src="/assets/logos/svce-logo.png"
              alt="Highways Logo"
              className="h-6 w-auto transition duration-300 hover:scale-105"
            />
          </Link>

          {/* CENTER → Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/events" className="hover:text-red-500/70 transition">Events</Link>
            <Link to="/schedule" className="hover:text-red-500/70 transition">Schedule</Link>
            <Link to="/sponsors" className="hover:text-red-500/70 transition">Sponsors</Link>
            <Link to="/team" className="hover:text-red-500/70 transition">Team</Link>
            <Link to="/glimpse" className="hover:text-red-500/70 transition">Glimpse</Link>
          </nav>

        {/* RIGHT → CTA */}
          <div className="flex items-center gap-4">
            <Link
              to="/passes"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-sm font-semibold transition duration-300 hover:border-white/35"
            >
              Get Passes
            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 text-white text-xl">
          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/schedule" onClick={() => setMenuOpen(false)}>Schedule</Link>
          <Link to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link>
          <Link to="/glimpse" onClick={() => setMenuOpen(false)}>Glimpse</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="/passes" onClick={() => setMenuOpen(false)}>Get Passes</Link>
        </div>
      )}
    </>
  );
}