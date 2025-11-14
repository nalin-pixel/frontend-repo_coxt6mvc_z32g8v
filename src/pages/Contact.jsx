import React from 'react'
import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold">Get in touch</h1>
          <p className="text-gray-500 mt-2">We\'re here to help with buying, selling, or investing.</p>

          <div className="mt-8 grid lg:grid-cols-3 gap-8">
            <form className="lg:col-span-2 space-y-4 bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
              <input placeholder="Name" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
              <input placeholder="Email" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
              <textarea rows="6" placeholder="Message" className="w-full bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
              <button className="bg-gray-900 text-white rounded-lg px-5 py-2">Send Message</button>
            </form>

            <div className="bg-white rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm">
              <div className="text-lg font-medium">Visit us</div>
              <p className="text-gray-500 mt-1">123 Luxury Ave, Suite 100</p>
              <div className="mt-6 h-56 w-full overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
