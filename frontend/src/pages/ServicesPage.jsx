import { Link } from 'react-router-dom'
import {
  Droplets, Gauge, Flame, AlertTriangle, Settings, Wrench,
  CheckCircle2, Phone, ArrowRight, Clock, Shield
} from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Drain Cleaning',
    tagline: 'Clear Blockages. Restore Flow.',
    description: `Blocked drains are one of the most common — and disruptive — plumbing problems in Toronto homes. 
    Our certified technicians use state-of-the-art hydro-jetting technology paired with high-definition camera inspection 
    to locate and eliminate blockages at their source, not just push them further down the line.`,
    services: [
      'High-pressure hydro-jetting (up to 4,000 PSI)',
      'Video camera inspection & line locating',
      'Tree root infiltration removal',
      'Floor drain & laundry drain cleaning',
      'Kitchen & bathroom drain clearing',
      'Main sewer line cleaning & descaling',
    ],
    signs: [
      'Slow draining sinks or tubs',
      'Gurgling sounds from drains',
      'Recurring clogs',
      'Sewage smell in your home',
    ],
    color: 'blue',
    accent: '#60a5fa',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    icon: Gauge,
    title: 'Leak Repair',
    tagline: 'Find It. Fix It. Fast.',
    description: `Even a small leak can cause thousands in water damage within days. FlowMaster uses non-invasive 
    thermal imaging and acoustic detection equipment to pinpoint leaks hidden behind walls, under slabs, 
    or beneath flooring — without unnecessary demolition.`,
    services: [
      'Thermal imaging & acoustic leak detection',
      'Pipe burst & pinhole leak repair',
      'Slab leak detection & repair',
      'Pipe relining (no-dig solution)',
      'Water main repair & replacement',
      'Shut-off valve replacement',
    ],
    signs: [
      'Unexplained high water bills',
      'Damp or warm spots on floors',
      'Water stains on ceilings or walls',
      'Low water pressure throughout home',
    ],
    color: 'emerald',
    accent: '#34d399',
    gradient: 'from-emerald-600 to-emerald-800',
  },
  {
    icon: Flame,
    title: 'Water Heater Installation',
    tagline: 'Hot Water When You Need It.',
    description: `From traditional tank units to high-efficiency tankless systems, FlowMaster handles installation, 
    repair, and replacement of all major brands. We'll help you choose the right solution for your home's size 
    and budget, with same-day installation available for emergency replacements.`,
    services: [
      'Tank & tankless water heater installation',
      'Hybrid heat pump water heaters',
      'Gas & electric water heater service',
      'Anode rod replacement & flushing',
      'Pressure relief valve testing',
      'All major brands: Rheem, Bradford White, Navien',
    ],
    signs: [
      'Running out of hot water faster than usual',
      'Rusty or discoloured hot water',
      'Popping or rumbling noises',
      'Unit older than 10–12 years',
    ],
    color: 'orange',
    accent: '#fb923c',
    gradient: 'from-orange-600 to-orange-800',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    tagline: '60-Minute Response. Every Time.',
    description: `Plumbing emergencies don't wait for business hours — and neither do we. FlowMaster's rapid-response 
    emergency teams are deployed across the GTA 24 hours a day, 365 days a year. When you call, we dispatch immediately 
    and commit to arriving within 60 minutes. If we're late, the call-out fee is on us.`,
    services: [
      'Burst pipe emergency repair',
      'Basement flooding & sewage backup',
      'Gas leak detection (safe shutoff)',
      'No hot water emergency replacement',
      'Frozen pipe thawing & repair',
      'Overflowing toilet & sewage blockage',
    ],
    signs: [
      'Any active flooding or water leak',
      'Sewage backup into home',
      'No water pressure suddenly',
      'Smell of gas near plumbing fixtures',
    ],
    urgent: true,
    color: 'red',
    accent: '#f87171',
    gradient: 'from-red-600 to-red-800',
  },
  {
    icon: Settings,
    title: 'Toilet & Faucet Repair',
    tagline: 'Small Fixes. Big Difference.',
    description: `A running toilet can waste up to 200 litres of water per day. A dripping faucet adds up on your 
    water bill and causes long-term damage to fixtures. Our technicians handle all toilet and faucet issues with 
    precision — bringing the right parts the first time.`,
    services: [
      'Running toilet diagnosis & repair',
      'Toilet flapper, fill valve & flush valve replacement',
      'Faucet repair & cartridge replacement',
      'Fixture replacement (all brands & styles)',
      'Slow-close seat installation',
      'Low-flow fixture upgrades',
    ],
    signs: [
      'Toilet that runs constantly',
      'Dripping or leaking faucet',
      'Toilet that won\'t flush properly',
      'Faucet handle that\'s hard to turn',
    ],
    color: 'purple',
    accent: '#c084fc',
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    icon: Wrench,
    title: 'Pipe Replacement',
    tagline: 'Built to Last. Built for Toronto.',
    description: `Older Toronto homes often have aging galvanized, lead, or deteriorated copper piping that poses 
    safety and reliability risks. FlowMaster offers full repiping services including trenchless pipe lining, 
    pipe bursting, and traditional repiping — all with a 10-year workmanship warranty.`,
    services: [
      'Whole-home repiping (copper, PEX, PVC)',
      'Trenchless pipe relining & bursting',
      'Lead pipe replacement (Toronto rebate program)',
      'Galvanized pipe removal & replacement',
      'Corroded fitting & coupling replacement',
      'Water pressure optimization',
    ],
    signs: [
      'Brown or discoloured tap water',
      'Frequent leaks at joints or fittings',
      'Low water pressure throughout home',
      'Home built before 1980 (possible lead pipe)',
    ],
    color: 'amber',
    accent: '#fbbf24',
    gradient: 'from-amber-600 to-amber-700',
  },
]

function ServiceCard({ service, index }) {
  const isEven = index % 2 === 0
  return (
    <div id={service.title.toLowerCase().replace(/\s+/g, '-')}
      className={`py-20 border-b border-white/5 scroll-mt-24 ${!isEven ? 'bg-navy-900/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-16 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={!isEven ? 'lg:order-2' : ''}>
            {service.urgent && (
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 
                              text-red-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 mb-4">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"></div>
                24/7 Emergency Service
              </div>
            )}
            <div className="section-tag mb-2">{service.tagline}</div>
            <h2 className="font-bebas text-5xl text-white mb-6">{service.title}</h2>
            <p className="text-slate-400 leading-relaxed mb-8">{service.description}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+14165550100" className="btn-primary flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call for Service
              </a>
              <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2">
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Details cards */}
          <div className={`space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
            {/* What we do */}
            <div className="card-glass p-6">
              <h4 className="font-bebas text-lg tracking-wide text-white mb-4 flex items-center gap-2">
                <service.icon className="w-4 h-4" style={{ color: service.accent }} />
                What's Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.services.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: service.accent }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs */}
            <div className="card-glass p-6">
              <h4 className="font-bebas text-lg tracking-wide text-white mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-copper-500" />
                Signs You Need This Service
              </h4>
              <div className="space-y-2">
                {service.signs.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: service.accent }}></div>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-copper-500/10 border border-copper-500/20 p-4 flex items-center gap-4">
              <Clock className="w-8 h-8 text-copper-500 flex-shrink-0" />
              <div>
                <div className="text-white text-sm font-semibold">FlowMaster Guarantee</div>
                <div className="text-slate-400 text-xs">
                  1-year parts & labour warranty · Flat-rate pricing · No hidden fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] 
                        bg-copper-500/8 rounded-full blur-[120px]"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="section-tag mb-4">Complete Plumbing Solutions</div>
          <h1 className="section-title mb-6">
            PROFESSIONAL SERVICES
            <br />
            <span className="text-copper-500">ACROSS TORONTO GTA</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            From clogged drains to complex pipe replacements, our TSSA-certified technicians 
            handle every plumbing challenge with precision, speed, and transparency.
          </p>

          {/* Service jump links */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {services.map((s) => (
              <a key={s.title} href={`#${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs border border-white/20 text-slate-400 px-4 py-2 
                           hover:border-copper-500/50 hover:text-copper-400 transition-all duration-300">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Sections */}
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}

      {/* CTA */}
      <section className="py-20 bg-copper-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-bebas text-5xl text-white mb-4">READY TO BOOK?</h2>
          <p className="text-white/80 mb-8">Same-day service available. Free estimates on all jobs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+14165550100"
              className="bg-white text-copper-600 font-bold px-8 py-4 text-sm uppercase tracking-wide
                         hover:bg-navy-900 hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> 416-555-0100
            </a>
            <Link to="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 text-sm uppercase tracking-wide
                         hover:bg-white hover:text-copper-600 transition-colors flex items-center justify-center gap-2">
              Online Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
