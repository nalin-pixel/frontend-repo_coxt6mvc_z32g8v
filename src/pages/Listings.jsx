import React, { useMemo, useState } from 'react'
import Layout from '../components/Layout'

const MOCK = Array.from({length:9}).map((_,i)=>({
  id:i+1,
  title:['Penthouse','Townhome','Villa','Loft','Estate'][i%5]+` ${i+1}`,
  price:[1250000,2380000,3420000,1890000,2790000][i%5],
  beds:[2,3,4,2,5][i%5],
  baths:[2,3,3,2,4][i%5],
  area:[1200,2100,3500,1500,4200][i%5],
  img:[
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1600&auto=format&fit=crop'
  ][i%5]
}))

export default function Listings(){
  const [q, setQ] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  const filtered = useMemo(()=>{
    return MOCK.filter(p=> (
      (!q || p.title.toLowerCase().includes(q.toLowerCase())) &&
      (!min || p.price >= Number(min)) &&
      (!max || p.price <= Number(max))
    ))
  },[q,min,max])

  return (
    <Layout>
      <section className="pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white ring-1 ring-gray-100 rounded-2xl p-4 shadow-sm sticky top-20 z-20">
            <div className="grid sm:grid-cols-5 gap-3">
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="col-span-2 bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
              <input value={min} onChange={e=>setMin(e.target.value)} placeholder="Min price" className="bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
              <input value={max} onChange={e=>setMax(e.target.value)} placeholder="Max price" className="bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10"/>
              <button className="bg-gray-900 text-white rounded-lg px-4 py-2">Filter</button>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p=> (
              <a key={p.id} href={`/property/${p.id}`} className="group rounded-3xl overflow-hidden bg-white ring-1 ring-gray-100 shadow-sm block">
                <div className="overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{p.title}</h3>
                    <div className="font-semibold">${p.price.toLocaleString()}</div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{p.beds} bd • {p.baths} ba • {p.area} sqft</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
