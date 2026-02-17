import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Menu, X, Droplets } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-navy-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs text-slate-400">
          <span>Serving Greater Toronto Area — Toronto · Mississauga · Brampton · Vaughan · Markham</span>
          <div className="flex items-center gap-6">
            <span>Mon–Sun: Open 24/7</span>
            <span className="text-copper-500 font-semibold">Licensed & Insured · TSSA Certified</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-navy-950/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] top-0' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-copper-500 flex items-center justify-center
                                group-hover:bg-copper-400 transition-colors duration-300">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-copper-500 
                                group-hover:border-copper-400 transition-colors duration-300"></div>
              </div>
              <div>
                <div className="font-bebas text-2xl tracking-wider text-white leading-none">
                  Flow<span className="text-copper-500">Master</span>
                </div>
                <div className="text-[9px] tracking-[0.3em] text-slate-400 uppercase">Plumbing Inc.</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link pb-0.5 ${location.pathname === link.to ? 'text-copper-400 after:w-full' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+14165550100" className="flex items-center gap-2 text-sm text-slate-300 hover:text-copper-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">416-555-0100</span>
              </a>
              <Link to="/contact" className="btn-primary py-3 px-6 text-xs">
                Free Estimate
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white hover:text-copper-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}>
          <div className="bg-navy-950/98 backdrop-blur-md border-t border-white/10 px-6 py-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-base font-medium transition-colors py-2 border-b border-white/5 
                    ${location.pathname === link.to ? 'text-copper-400' : 'text-slate-300 hover:text-copper-400'}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+14165550100"
                  className="flex items-center gap-2 text-copper-400 font-semibold text-lg">
                  <Phone className="w-5 h-5" />
                  416-555-0100
                </a>
                <Link to="/contact" className="btn-primary text-center">
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
