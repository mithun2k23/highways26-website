"use client"

export default function AboutS() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-20 py-24 text-white">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="mb-12 max-w-3xl space-y-3">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            About SVCE
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-6">
          
          <p className="text-base sm:text-lg md:text-xl text-white/65 leading-relaxed">
            Sri Venkateswara College of Engineering (SVCE), established in 1985, 
            is a leading engineering institution in Tamil Nadu. Guided by Dr. A.C. Muthiah, 
            an industrialist and philanthropist, SVCE became the first private engineering college 
            in Chennai to receive Autonomous status from UGC. Accredited by NAAC, its 12 B.E./B.Tech. 
            and 9 M.E./M.Tech. programs are affiliated with Anna University.
          </p>

          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
            The college maintains a stellar placement record, with over 96% of eligible students placed annually in 150+ companies. 
            SVCE has a distinguished alumni network of over 22,000 professionals in top brands like Apple, Google, and Amazon, 
            and has produced 100+ successful entrepreneurs. Situated in Sriperumbudur's industrial corridor, its 95-acre campus 
            features cutting-edge infrastructure, ICT-enabled facilities, and lush greenery.
          </p>

        </div>

      </div>
    </section>
  )
}