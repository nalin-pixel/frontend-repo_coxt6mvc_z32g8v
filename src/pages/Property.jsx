import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'

const IMG = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop'
]

export default function Property(){
  const { id } = useParams()
  return (
    <Layout>
      <section className="pb-16">
        <div className="h-[60vh] w-full sticky top-16 overflow-hidden">
          <div className="relative h-full">
            <img src={IMG[0]} className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white"/>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
                <h1 className="text-3xl font-semibold">Skyline Penthouse</h1>
                <p className="text-gray-500 mt-1">Downtown, Skyline District</p>
                <div className="text-2xl font-medium mt-4">$4,250,000</div>
                <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                  <div className="bg-gray-50 rounded-lg p-3">4 Bedrooms</div>
                  <div className="bg-gray-50 rounded-lg p-3">3 Bathrooms</div>
                  <div className="bg-gray-50 rounded-lg p-3">3,500 sqft</div>
                </div>

                <div className="mt-8 prose prose-gray max-w-none">
                  <p>Elevated luxury living with panoramic city views. Crafted with premium materials and thoughtful details throughout.</p>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-medium">Amenities</h3>
                  <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                    {['Private terrace','Chef kitchen','Smart home','24/7 concierge','Fitness center','Secure parking'].map((a,i)=> (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">{a}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="sticky top-24 bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
                <div className="text-lg font-medium">Contact Agent</div>
                <p className="text-sm text-gray-500 mt-1">Interested in this property? Get in touch for a private tour.</p>
                <form className="mt-4 space-y-3">
                  <input placeholder="Name" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
                  <input placeholder="Email" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
                  <input placeholder="Phone" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
                  <button className="w-full bg-gray-900 text-white rounded-lg px-4 py-2">Request Info</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
