import HighwaysLogo from "../assets/highways-logo.png";

const Footer = () => {
  return (
    <>
      <style>
        {`
          @keyframes slideUpFade {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>

      <footer className="bg-black text-white pt-20 pb-10 px-[6%] text-center">

        {/* Big Logo */}
        <div className="flex justify-center mb-12">
          <img
            src={HighwaysLogo}
            alt="Highways Logo"
            className="w-[95%] h-auto mx-auto"
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold tracking-wide mb-10">
          <a href="/" className="text-white/60 hover:text-red-500 transition">Home</a>
          <a href="/events" className="text-white/60 hover:text-red-500 transition">Events</a>
          <a href="/schedule" className="text-white/60 hover:text-red-500 transition">Schedule</a>
          <a href="/passes" className="text-white/60 hover:text-red-500 transition">Get Passes</a>
          <a href="/sponsors" className="text-white/60 hover:text-red-500 transition">Sponsors</a>
          <a href="/team" className="text-white/60 hover:text-red-500 transition">Team</a>
          <a href="/faq" className="text-white/60 hover:text-red-500 transition">FAQ</a>
        </div>

        {/* Social + Contact */}
        <div className="flex justify-center gap-8 mb-10 text-xs font-bold tracking-[2px] uppercase">
          <a
            href="https://www.instagram.com/svce_highways"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-red-500 transition"
          >
            Instagram
          </a>

          <a
            href="mailto:highways@svce.ac.in"
            className="text-white/50 hover:text-red-500 transition"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] tracking-[3px] opacity-30 font-bold uppercase">
          © 2026 Highways 
        </div>

      </footer>
    </>
  );
};

export default Footer;