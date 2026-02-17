import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Droplets, Facebook, Instagram, Twitter } from 'lucide-react'

const services = [
  'Drain Cleaning',
  'Leak Repair', 
  'Water Heater Installation',
  'Emergency Plumbing',
  'Toilet & Faucet Repair',
  'Pipe Replacement',
  'Sewer Line Service',
  'Water Softeners',
]

const areas = [
  'Toronto', 'Mississauga', 'Brampton', 'Vaughan',
  'Markham', 'Richmond Hill', 'Oakville', 'Etobicoke',
  'Scarborough', 'North York', 'Ajax', 'Pickering',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/10">
      {/* Emergency Banner */}
      <div className="bg-copper-500 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="font-bebas text-xl tracking-wider text-white">
              24/7 EMERGENCY PLUMBING — WE RESPOND IN 60 MINUTES OR LESS
            </span>
          </div>
          <a href="tel:+14165550100"
            className="bg-white text-copper-600 font-bold px-6 py-2 text-sm uppercase tracking-wide hover:bg-navy-900 hover:text-white transition-colors duration-300 whitespace-nowrap">
            Call Now: 416-555-0100
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-copper-500 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bebas text-2xl tracking-wider text-white leading-none">
                  Flow<span className="text-copper-500">Master</span>
                </div>
                <div className="text-[9px] tracking-[0.3em] text-slate-500 uppercase">Plumbing Inc.</div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Greater Toronto's most trusted plumbing company since 2005. Licensed, insured, 
              and committed to delivering premium plumbing solutions.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center
                             text-slate-400 hover:text-copper-400 hover:border-copper-500/50 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bebas text-xl tracking-wider text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services"
                    className="text-slate-400 hover:text-copper-400 text-sm transition-colors duration-200 
                               flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-copper-500 rounded-full group-hover:w-3 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bebas text-xl tracking-wider text-white mb-6">Service Areas</h4>
            <div className="grid grid-cols-2 gap-2">
              {areas.map((area) => (
                <span key={area} className="text-slate-400 text-sm hover:text-copper-400 transition-colors cursor-pointer">
                  {area}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Serving all areas within 100km of Downtown Toronto, including the 905 region.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bebas text-xl tracking-wider text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+14165550100" className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-copper-500 transition-colors duration-300">
                  <Phone className="w-3.5 h-3.5 text-copper-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Emergency Line</div>
                  <div className="text-white font-semibold group-hover:text-copper-400 transition-colors">416-555-0100</div>
                </div>
              </a>

              <a href="mailto:info@flowmasterplumbing.ca" className="flex items-start gap-3 group">
                <div className="w-8 h-8 bg-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-copper-500 transition-colors duration-300">
                  <Mail className="w-3.5 h-3.5 text-copper-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Email</div>
                  <div className="text-white text-sm group-hover:text-copper-400 transition-colors">info@flowmasterplumbing.ca</div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-copper-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Office</div>
                  <div className="text-white text-sm">123 King St W, Toronto, ON M5H 1A1</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-copper-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-copper-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Hours</div>
                  <div className="text-white text-sm">24 Hours, 7 Days a Week</div>
                  <div className="text-xs text-copper-500">Emergency Service Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} FlowMaster Plumbing Inc. All rights reserved. | Ontario License #12345</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-copper-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-copper-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-copper-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
