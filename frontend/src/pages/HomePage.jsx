import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone, Shield, Clock, Star, ChevronRight, CheckCircle2,
  Droplets, Flame, Wrench, AlertTriangle, Gauge, Settings,
  Award, Users, MapPin, ArrowRight, Play, Quote
} from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Droplets,
    title: 'Drain Cleaning',
    slug: 'drain-cleaning',
    desc: 'High-pressure hydro-jetting and snaking to clear blockages. Backed by camera inspection for complete peace of mind.',
    features: ['Camera Inspection', 'Hydro-Jetting', 'Root Removal'],
    color: 'from-blue-500/20 to-blue-600/10',
    accent: '#60a5fa',
  },
  {
    icon: Gauge,
    title: 'Leak Repair',
    slug: 'leak-repair',
    desc: 'Fast detection and repair of pipe, fitting, and slab leaks before they cause catastrophic water damage.',
    features: ['Thermal Detection', 'Pipe Relining', 'Water Damage Prevention'],
    color: 'from-emerald-500/20 to-emerald-600/10',
    accent: '#34d399',
  },
  {
    icon: Flame,
    title: 'Water Heater',
    slug: 'water-heater',
    desc: 'Expert installation, repair, and replacement of tank and tankless water heaters. All major brands.',
    features: ['Same-Day Install', 'Tankless Specialists', 'Warranty Included'],
    color: 'from-orange-500/20 to-orange-600/10',
    accent: '#fb923c',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    slug: 'emergency',
    desc: '60-minute response across GTA. Our rapid-response team is on standby 24/7, 365 days a year.',
    features: ['60-Min Response', '24/7/365 Coverage', 'Flat-Rate Pricing'],
    color: 'from-red-500/20 to-red-600/10',
    accent: '#f87171',
    urgent: true,
  },
  {
    icon: Settings,
    title: 'Toilet & Faucet',
    slug: 'toilet-faucet',
    desc: 'Running toilets, dripping faucets, fixture replacements. Small fixes done right the first time.',
    features: ['All Brands', 'Same-Day Service', 'Seniors Discount'],
    color: 'from-purple-500/20 to-purple-600/10',
    accent: '#c084fc',
  },
  {
    icon: Wrench,
    title: 'Pipe Replacement',
    slug: 'pipe-replacement',
    desc: 'Full repiping services for aging copper, galvanized, or lead pipes. Trenchless options available.',
    features: ['Trenchless Option', 'All Pipe Types', '10-Year Warranty'],
    color: 'from-amber-500/20 to-amber-600/10',
    accent: '#fbbf24',
  },
]

const stats = [
  { value: '18+', label: 'Years Serving GTA', icon: Award },
  { value: '10K+', label: 'Happy Clients', icon: Users },
  { value: '4.9', label: 'Google Rating', icon: Star },
  { value: '60min', label: 'Emergency Response', icon: Clock },
]

const testimonials = [
  {
    name: 'Sandra K.',
    location: 'North York, ON',
    rating: 5,
    text: 'FlowMaster arrived within the hour on a Sunday night when our basement was flooding. Professional, fast, and reasonably priced. Cannot recommend enough.',
    service: 'Emergency Plumbing',
  },
  {
    name: 'Michael T.',
    location: 'Mississauga, ON',
    rating: 5,
    text: 'Had three quotes for water heater installation. FlowMaster was honest, upfront, and did an immaculate job. The team was respectful of our home throughout.',
    service: 'Water Heater Install',
  },
  {
    name: 'Priya M.',
    location: 'Vaughan, ON',
    rating: 5,
    text: 'Our drain was backing up for months and others couldn\'t fix it permanently. FlowMaster used camera inspection to find a root issue — problem solved in 2 hours!',
    service: 'Drain Cleaning',
  },
]

const areas = ['Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Markham', 'Richmond Hill', 'Oakville', 'Scarborough', 'North York', 'Etobicoke', 'Ajax', 'Pickering']

// ─── Hooks ──────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useInView()
  useEffect(() => {
    if (!visible) return
    const num = parseFloat(target)
    const isDecimal = target.includes('.')
    const duration = 1800
    const steps = 50
    const increment = num / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, num)
      setCount(isDecimal ? current.toFixed(1) : Math.floor(current))
      if (current >= num) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [visible, target])
  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Sections ───────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-pattern"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 h-full w-[45%] bg-gradient-to-b from-white/[0.02] to-transparent
                      [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"></div>

      {/* Pipe decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-copper-500/60 hidden lg:block"></div>
      <div className="absolute left-1 top-1/2 -translate-y-1/2 w-0.5 h-48 bg-copper-500/20 hidden lg:block"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-400 text-sm">Rated 4.9/5 by 847+ GTA homeowners</span>
            </div>

            <div>
              <div className="section-tag mb-3">Greater Toronto's #1 Plumbing Service</div>
              <h1 className="font-bebas text-6xl sm:text-7xl xl:text-8xl leading-none text-white mb-2">
                TORONTO'S
                <br />
                MOST TRUSTED
                <br />
                <span className="text-copper-500">PLUMBER</span>
              </h1>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              Emergency response, drain cleaning, water heater installation, and more.
              Available 24/7 across GTA — <strong className="text-white">60-minute response guaranteed</strong> or your service is free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+14165550100" className="btn-primary flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call 416-555-0100
              </a>
              <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2">
                Free Online Estimate
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: Shield, text: 'TSSA Certified' },
                { icon: CheckCircle2, text: 'Licensed & Insured' },
                { icon: Clock, text: '60-Min Emergency' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                  <Icon className="w-4 h-4 text-copper-500" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual Card Stack */}
          <div className="relative hidden lg:block">
            {/* Main card */}
            <div className="relative z-10 bg-gradient-to-br from-navy-900 to-navy-950 border border-white/10 p-8 
                            shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Currently On Route</div>
                  <div className="text-copper-400 font-semibold">Emergency Unit #3</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-sm font-medium">Active</span>
                </div>
              </div>

              <div className="space-y-4">
                {['Drain Cleaning — Complete', 'Leak Detection — En Route', 'Water Heater — Scheduled 2PM'].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 py-3 border-b border-white/5 last:border-0`}>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      i === 0 ? 'bg-emerald-400' : i === 1 ? 'bg-copper-400 animate-pulse' : 'bg-slate-600'
                    }`}></div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 bg-copper-500/10 border border-copper-500/20 p-4">
                <MapPin className="w-5 h-5 text-copper-500 flex-shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">Serving Now</div>
                  <div className="text-sm text-white font-medium">North York • Scarborough • Markham</div>
                </div>
              </div>
            </div>

            {/* Rating bubble */}
            <div className="absolute -top-6 -right-6 bg-copper-500 p-5 shadow-[0_10px_40px_rgba(255,107,26,0.4)]">
              <div className="font-bebas text-4xl text-white leading-none">4.9</div>
              <div className="flex mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
              <div className="text-[10px] text-white/80 mt-1">847 Reviews</div>
            </div>

            {/* Bottom card accent */}
            <div className="absolute -bottom-4 -left-4 right-4 top-4 border border-copper-500/20 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-copper-500/10 border-t border-copper-500/20 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].fill([
            'DRAIN CLEANING', '·', 'LEAK REPAIR', '·', 'WATER HEATER INSTALL', '·',
            'EMERGENCY PLUMBING', '·', 'TOILET & FAUCET REPAIR', '·', 'PIPE REPLACEMENT', '·'
          ]).flat().map((item, i) => (
            <span key={i} className={`mx-4 text-sm font-bebas tracking-widest ${
              item === '·' ? 'text-copper-500' : 'text-slate-400'
            }`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="bg-navy-900 border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => {
            const num = value.replace(/[^0-9.]/g, '')
            const suffix = value.replace(/[0-9.]/g, '')
            return (
              <div key={label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-copper-500/10 
                                border border-copper-500/20 group-hover:bg-copper-500/20 transition-colors duration-300 mb-4">
                  <Icon className="w-5 h-5 text-copper-500" />
                </div>
                <div className="font-bebas text-5xl text-copper-400 leading-none mb-2">
                  <AnimatedCounter target={num} suffix={suffix} />
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wide">{label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const [ref, visible] = useInView(0.05)
  return (
    <section className="py-24 bg-navy-950" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="section-tag mb-3">What We Do Best</div>
            <h2 className="section-title">
              EXPERT <span className="text-copper-500">PLUMBING</span>
              <br />SERVICES
            </h2>
          </div>
          <p className="text-slate-400 max-w-md lg:text-right">
            From routine maintenance to complex emergencies, our certified technicians deliver 
            precision workmanship backed by our ironclad guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`service-card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {service.urgent && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold 
                                uppercase tracking-wider px-3 py-1">24/7</div>
              )}

              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.color} mb-6`}>
                <service.icon className="w-5 h-5" style={{ color: service.accent }} />
              </div>

              <h3 className="font-bebas text-2xl tracking-wide text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.accent }} />
                    {f}
                  </div>
                ))}
              </div>

              <div className="pipe-decoration my-4"></div>

              <Link
                to="/services"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: service.accent }}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyUsSection() {
  const reasons = [
    { title: 'Flat-Rate Pricing', desc: 'You get your quote upfront — no surprise charges, ever.' },
    { title: '60-Minute Guarantee', desc: 'Emergency response within 60 minutes or we waive the call-out fee.' },
    { title: 'TSSA Certified', desc: 'All technicians are licensed under Ontario's TSSA regulations.' },
    { title: 'Full Warranty', desc: '1-year parts & labour warranty on all completed work.' },
    { title: 'Family-Owned', desc: 'Local Toronto business serving GTA for 18+ years.' },
    { title: 'Clean & Tidy', desc: 'We leave your home exactly as we found it. Guaranteed.' },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper-500/5 rounded-full blur-[100px]"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag mb-3">Why FlowMaster</div>
            <h2 className="section-title mb-6">
              WE'RE NOT JUST
              <br />
              <span className="text-copper-500">PLUMBERS.</span>
              <br />
              WE'RE YOUR NEIGHBORS.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Since 2005, FlowMaster Plumbing has been Toronto's go-to for reliable, honest, 
              and expert plumbing. We combine old-school craftsmanship with modern technology 
              to solve problems once — and solve them right.
            </p>
            <Link to="/about" className="btn-primary">
              Our Story
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div key={reason.title}
                className="card-glass p-6 group hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-copper-500/20 border border-copper-500/30 flex items-center 
                                justify-center mb-4 group-hover:bg-copper-500 transition-all duration-300">
                  <span className="font-bebas text-copper-500 group-hover:text-white transition-colors text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm">{reason.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-tag mb-3">What Our Clients Say</div>
          <h2 className="section-title">
            REAL REVIEWS FROM
            <br />
            <span className="text-copper-500">REAL TORONTONIANS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-glass p-8 relative group hover:bg-white/8 transition-all duration-500">
              <Quote className="w-8 h-8 text-copper-500/30 mb-4" />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="pipe-decoration mb-4"></div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />{t.location}
                  </div>
                </div>
                <span className="text-xs bg-copper-500/10 text-copper-400 border border-copper-500/20 px-3 py-1">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-copper-400 transition-colors flex items-center justify-center gap-2">
            View all 847 reviews on Google
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceAreasSection() {
  return (
    <section className="py-20 bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="section-tag mb-3">Coverage Map</div>
          <h2 className="section-title">
            WE SERVE ALL OF
            <br />
            <span className="text-copper-500">GREATER TORONTO</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <div key={area}
              className="border border-white/10 text-slate-300 text-sm px-5 py-2.5 
                         hover:border-copper-500/50 hover:text-copper-400 hover:bg-copper-500/5
                         transition-all duration-300 cursor-pointer">
              {area}
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-8">
          Not seeing your area? Call us — we likely cover it.{' '}
          <a href="tel:+14165550100" className="text-copper-400 hover:text-copper-300">416-555-0100</a>
        </p>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-copper-500"></div>
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-[80px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 mb-6">
          Emergency Service Available Now
        </div>
        <h2 className="font-bebas text-5xl sm:text-6xl lg:text-8xl text-white leading-none mb-6">
          PLUMBING PROBLEM?
          <br />
          WE HAVE THE SOLUTION.
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
          Don't let a small leak become a big disaster. Our team is standing by — 
          ready to respond across the GTA within 60 minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+14165550100"
            className="bg-white text-copper-600 font-bold px-10 py-4 text-sm uppercase tracking-wide 
                       hover:bg-navy-900 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Call 416-555-0100
          </a>
          <Link to="/contact"
            className="border-2 border-white text-white font-semibold px-10 py-4 text-sm uppercase tracking-wide
                       hover:bg-white hover:text-copper-600 transition-colors duration-300">
            Request Online Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <CTASection />
    </>
  )
}
