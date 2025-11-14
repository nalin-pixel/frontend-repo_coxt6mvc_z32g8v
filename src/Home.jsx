import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import FeaturedProperties from './components/FeaturedProperties'
import Testimonials from './components/Testimonials'

export default function Home(){
  return (
    <Layout>
      <Hero/>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title:'Buy with confidence', desc:'Access exclusive properties and white-glove guidance from search to closing.'},
              {title:'Sell with impact', desc:'Position your home with premium marketing and a global buyer network.'},
              {title:'Invest with clarity', desc:'Leverage data-driven insights and expert advisory for portfolio growth.'},
            ].map((b, i)=> (
              <div key={i} className="rounded-2xl p-6 bg-white ring-1 ring-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="text-lg font-medium">{b.title}</div>
                <p className="text-gray-500 mt-2 leading-7">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FeaturedProperties/>
      <Testimonials/>
    </Layout>
  )
}
