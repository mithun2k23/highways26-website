"use client"

import { useState } from "react"

type FAQ = {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: "How many events a delegate can participate?",
      answer:
        "A delegate can participate in multiple events depending on the event schedule and availability.",
    },
    {
      question: "What is the last date for registration?",
      answer:
        "Registration closes one week before the event begins.",
    },
    {
      question: "What are the supporting facilities provided?",
      answer:
        "Accommodation guidance, parking, food stalls, and help desks will be available.",
    },
    {
      question: "What are the policies to be followed?",
      answer:
        "Delegates must follow event guidelines and institutional rules.",
    },
    {
      question: "How about parking facilities for vehicles?",
      answer:
        "Parking areas will be allocated inside the campus for participants.",
    },
  ]

  return (
    <section
      className="w-full px-6 md:px-12 lg:px-20 py-24 text-white"
      id="faq"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Frequently asked{" "}
            <span className="text-white/70">Questions</span>
          </h2>
          <p className="max-w-xl text-white/65">
            Quick answers to the most common registration and on-campus queries.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-4 md:space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border border-white/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left p-5 text-lg font-medium hover:bg-white/5 transition"
                >
                  {faq.question}
                  <span className="text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-5 pb-5 text-white/70 transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}