export default function AboutH() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20">
      
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/highways.MOV"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-6">
            THE HIGHWAYS
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed mb-4">
            HIGHWAYS, the flagship fest of SVCE, continues to inspire, 
            empower and entertain students with its showcase of cultural brilliance and artistic vitality. 
            It offers a powerful stage for participants to express themselves, 
            celebrate creativity and unveil their hidden talents.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white/65 leading-relaxed">
            Uniting students from diverse backgrounds and traditions, 
            HIGHWAYS '26 promises an unforgettable experience with a spectacular lineup of culturally rich performances 
            and vibrant non-technical showcases. It stands as a celebration of talent, unity and the true spirit of festivity.
          </p>
        </div>

      </div>
    </section>
  )
}