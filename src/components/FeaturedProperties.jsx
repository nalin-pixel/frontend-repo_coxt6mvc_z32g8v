import React from 'react'
import { motion } from 'framer-motion'

const properties = [
  {
    id: 1,
    title: 'Skyline Penthouse',
    price: '$4,250,000',
    location: 'Downtown, Skyline District',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Modern Villa Retreat',
    price: '$2,980,000',
    location: 'Hillside, West End',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Glass House by the Park',
    price: '$3,450,000',
    location: 'Parkside, North Quarter',
    image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
  },
]

function Card({item}){
  return (
    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}} transition={{duration:0.5}} className="group rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100">
      <div className="relative overflow-hidden">
        <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <div className="text-gray-900 font-medium">{item.price}</div>
        </div>
        <p className="text-gray-500 mt-1">{item.location}</p>
        <button className="mt-4 w-full bg-gray-900 text-white rounded-lg py-2 hover:bg-black transition-colors">View Details</button>
      </div>
    </motion.div>
  )
}

export default function FeaturedProperties(){
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Featured properties</h2>
            <p className="text-gray-500 mt-2">A handpicked selection from our exclusive listings.</p>
          </div>
          <a href="/listings" className="hidden sm:inline-flex items-center gap-2 text-gray-900 hover:underline">Explore all</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(p => <Card key={p.id} item={p}/>) }
        </div>
      </div>
    </section>
  )
}
