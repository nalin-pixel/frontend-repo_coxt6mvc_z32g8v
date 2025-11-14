import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Home, Building2, Info, Phone, Search } from 'lucide-react'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-gray-900 text-xl">
          <span className="uppercase">YOUR COMPANY NAME</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={({isActive})=>`flex items-center gap-2 hover:text-gray-900 transition-colors ${isActive?'text-gray-900':'text-gray-600'}`}>
            <Home size={18}/> Home
          </NavLink>
          <NavLink to="/listings" className={({isActive})=>`flex items-center gap-2 hover:text-gray-900 transition-colors ${isActive?'text-gray-900':'text-gray-600'}`}>
            <Building2 size={18}/> Listings
          </NavLink>
          <NavLink to="/about" className={({isActive})=>`flex items-center gap-2 hover:text-gray-900 transition-colors ${isActive?'text-gray-900':'text-gray-600'}`}>
            <Info size={18}/> About
          </NavLink>
          <NavLink to="/contact" className={({isActive})=>`flex items-center gap-2 hover:text-gray-900 transition-colors ${isActive?'text-gray-900':'text-gray-600'}`}>
            <Phone size={18}/> Contact
          </NavLink>
          <Link to="/listings" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-4 py-2 hover:bg-black transition-colors">
            <Search size={16}/> Find a home
          </Link>
        </nav>

        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-white/80 backdrop-blur border-t">
          <div className="flex flex-col gap-3">
            <NavLink onClick={()=>setOpen(false)} to="/" className="text-gray-700">Home</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/listings" className="text-gray-700">Listings</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/about" className="text-gray-700">About</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/contact" className="text-gray-700">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold tracking-tight text-gray-900 text-lg">YOUR COMPANY NAME</div>
          <p className="text-gray-500 mt-3 leading-6">A premium real estate partner for discerning buyers, sellers, and investors. Elevating property experiences with trust and excellence.</p>
        </div>
        <div>
          <div className="font-medium text-gray-900">Company</div>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li><Link to="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link to="/listings" className="hover:text-gray-900">Listings</Link></li>
            <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-gray-900">Services</div>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li>Buy</li>
            <li>Sell</li>
            <li>Invest</li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-gray-900">Contact</div>
          <ul className="mt-3 space-y-2 text-gray-500">
            <li>hello@yourcompany.com</li>
            <li>+1 (555) 123-4567</li>
            <li>123 Luxury Ave, Suite 100</li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-gray-400 py-6 text-center">© {new Date().getFullYear()} YOUR COMPANY NAME. All rights reserved.</div>
    </footer>
  )
}

export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header/>
      <main className="pt-20">{children}</main>
      <Footer/>
    </div>
  )
}
