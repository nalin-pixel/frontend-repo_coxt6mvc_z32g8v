import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/0 pointer-events-none"/>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="max-w-2xl text-white">
          <p className="uppercase tracking-[0.3em] text-xs/relaxed text-white/70">Luxury Real Estate</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold leading-[1.05]">Homes that define modern luxury living</h1>
          <p className="mt-5 text-white/80 text-lg">Discover curated properties in the city's most coveted locations. Premium service for buyers, sellers, and investors.</p>

          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-8 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg ring-1 ring-white/40">
            <div className="grid sm:grid-cols-4 gap-3">
              <input className="col-span-2 bg-white/70 rounded-lg px-3 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="City, neighborhood, address"/>
              <select className="bg-white/70 rounded-lg px-3 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20">
                <option>Buy</option>
                <option>Rent</option>
              </select>
              <button className="bg-gray-900 hover:bg-black text-white rounded-lg px-4 py-3 transition-colors">Search</button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs">Scroll</div>
    </section>
  )
}
