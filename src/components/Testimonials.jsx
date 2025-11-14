import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Alex M.', text: 'Flawless experience from start to finish. The team understood luxury and delivered beyond expectations.', role: 'Buyer' },
  { name: 'Sophia L.', text: 'Professional, attentive, and highly effective. Our property sold in record time at an excellent price.', role: 'Seller' },
  { name: 'Daniel K.', text: 'Insightful market knowledge and premium service. Ideal partner for serious investors.', role: 'Investor' },
]

export default function Testimonials(){
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">What clients say</h2>
          <p className="text-gray-500 mt-2">Trusted by buyers, sellers, and investors.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1, duration:0.5}} className="rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm bg-gradient-to-br from-gray-50 to-white">
              <p className="text-gray-700 leading-7">“{t.text}”</p>
              <div className="mt-6 text-sm text-gray-500">{t.name} • {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
