import React from 'react'
import Layout from '../components/Layout'

export default function About(){
  return (
    <Layout>
      <section className="relative">
        <div className="h-[60vh] relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMwMzQ4MDl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p className="text-white/80 mt-2">A boutique real estate firm for the modern era.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-gray max-w-none">
            <p>We combine deep market expertise with refined aesthetics to deliver exceptional outcomes for buyers, sellers, and investors. Our approach is detail-obsessed, data-informed, and always human-first.</p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[{n:'$1.2B+',l:'Total sales'},{n:'950+',l:'Happy clients'},{n:'15+',l:'Years of excellence'}].map((m,i)=> (
              <div key={i} className="rounded-2xl p-6 bg-white ring-1 ring-gray-100 shadow-sm text-center">
                <div className="text-3xl font-semibold">{m.n}</div>
                <div className="text-gray-500 mt-1">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
