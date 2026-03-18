import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

const contacts = [
  {
    name: "Dhayakar T",
    phone: "+917305802678",
    email: "2022ad0583@svce.ac.in",
  },
  {
    name: "Divyashree M",
    phone: "+917339697795",
    email: "2023ad0133@svce.ac.in",
  },
  {
    name: "Kabilan G",
    phone: "+917639650627",
    email: "2023ce0393@svce.ac.in",
  },
]

export default function FooterSection() {
  return (
    <>
      {/* Contact Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-24 text-white" id="contact">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="mb-12 max-w-3xl space-y-3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              For Queries
            </h2>
            <p className="text-xl md:text-2xl text-white/65">
              please contact
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            {contacts.map((person) => (
              <Card
                key={person.name}
                className="bg-transparent border border-white-500/60 hover:white-red-400 
                transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,0,0,0.25)]"
              >
                <CardContent className="p-6 md:p-8 space-y-5">

                  <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                    {person.name}
                  </h3>

                  <div className="space-y-2 text-white/80">

                    <a
                      href={`tel:${person.phone}`}
                      className="block hover:text-white transition duration-200 hover:translate-x-1"
                    >
                      {person.phone}
                    </a>

                    <a
                      href={`mailto:${person.email}`}
                      className="block hover:text-white transition duration-200 hover:translate-x-1"
                    >
                      {person.email}
                    </a>

                  </div>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-24 text-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8 max-w-xl">

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
              Join Us at <br />
              <span className="text-white/65">
              Sri Venkateswara <br />
              College of <br />
              Engineering</span>
            </h2>

            <p className="text-white leading-relaxed">
              Post Bag No.1, Pennalur Village Chennai - Bangaluru High Road
              Sriperumbudur Tk, Tamil Nadu 602117, India
            </p>

            <p className="text-white/65 leading-relaxed">
              <span className="text-white">HIGHWAYS '26 </span>will be hosted at the vibrant campus of Sri Venkateswara College of Engineering,
              offering world-class infrastructure, spacious venues, and an energetic atmosphere.
            </p>

          </div>

          {/* MAP */}
          <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/20 transition duration-300 hover:scale-[1.01]">

            <iframe
              src="https://maps.google.com/maps?q=Sri%20Venkateswara%20College%20of%20Engineering%2C%20Pennalur%2C%20Sriperumbudur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 lg:px-20 py-20">

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">

          <img
            src="/assets/logos/highways-logo.png"
            alt="Highways Logo"
            className="h-12 w-auto transition duration-300 hover:scale-105"
          />

          {/* Main Nav */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">

            <Link to="/" className="hover:text-white/65 transition">
              Home
            </Link>

            <Link to="/events" className="hover:text-white/65 transition">
              Events
            </Link>

            <Link to="/schedule" className="hover:text-white/65 transition">
              Schedule
            </Link>

            <Link to="/passes" className="hover:text-white/65 transition">
              Get Passes
            </Link>

            <Link to="/sponsors" className="hover:text-white/65 transition">
              Sponsors
            </Link>

            {/* Needs to be fixed */}
            <a href="/" className="hover:text-white/65 transition">
              FAQ
            </a>

          </nav>

          {/* Secondary Nav */}
          <nav className="flex gap-6 text-sm">

            <a
              href="https://www.instagram.com/svce_highways"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/65 transition"
            >
              Instagram
            </a>

            {/* Needs to be fixed */}
            <Link to="/contact" className="hover:text-white/65 transition">
              Contact
            </Link>

          </nav>

          <p className="text-sm text-white/60">
            © 2026 Highways
          </p>

        </div>

      </footer>
    </>
  )
}