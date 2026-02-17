import { Link } from 'react-router-dom'
import {
  Award, Users, Shield, Clock, CheckCircle2, 
  Star, Phone, MapPin, Droplets
} from 'lucide-react'

const team = [
  {
    name: 'Marcus Chen',
    role: 'Founder & Master Plumber',
    cert: 'TSSA Certified · 20+ Years',
    bio: 'Marcus founded FlowMaster in 2005 after a decade with a commercial plumbing contractor. His philosophy: do the job right the first time, every time.',
    initials: 'MC',
  },
  {
    name: 'David Osei',
    role: 'Senior Technician',
    cert: 'TSSA Certified · 12 Years',
    bio: 'David specializes in complex drain systems and trenchless pipe repair. He\'s our go-to for the tough jobs that others turn away.',
    initials: 'DO',
  },
  {
    name: 'Sarah Park',
    role: 'Service Manager',
    cert: 'Operations · 8 Years',
    bio: 'Sarah ensures every dispatch is fast and every customer experience exceeds expectations. She runs the logistics behind our 60-minute guarantee.',
    initials: 'SP',
  },
  {
    name: 'James Okonkwo',
    role: 'Emergency Specialist',
    cert: 'TSSA Certified · 9 Years',
    bio: 'James leads our night emergency team and has handled hundreds of basement flood situations across Toronto. Cool under pressure, always.',
    initials: 'JO',
  },
]

const certifications = [
  'Ontario College of Trades License',
  'TSSA Gas Technician II',
  'WCB Workplace Safety Certified',
  'EnviroStar™ Eco-Friendly Contractor',
  'HomeStars Top Rated 2024',
  'Better Business Bureau A+ Rating',
]

const milestones = [
  { year: '2005', event: 'FlowMaster founded in North York by Marcus Chen' },
  { year: '2009', event: 'Expanded to full GTA coverage with 5-vehicle fleet' },
  { year: '2013', event: 'Launched 24/7 emergency response program' },
  { year: '2017', event: 'Introduced camera inspection & hydro-jetting tech' },
  { year: '2020', event: '5,000+ customers milestone; moved to King St W office' },
  { year: '2024', event: '10,000+ customers — Toronto\'s highest-rated plumber' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-copper-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="section-tag mb-4">Our Story</div>
            <h1 className="section-title mb-6">
              TORONTO BORN.
              <br />
              TORONTO <span className="text-copper-500">PROUD.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed mb-8">
              FlowMaster Plumbing started with one van, one plumber, and an uncompromising commitment 
              to honest work. Nearly two decades later, we're GTA's most trusted plumbing company — 
              and our values haven't changed a bit.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="btn-primary">Get Free Estimate</Link>
              <a href="tel:+14165550100" className="btn-secondary flex items-center gap-2">
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-3">Our Mission</div>
              <h2 className="font-bebas text-5xl text-white mb-6">
                HONEST PLUMBING.
                <br />
                <span className="text-copper-500">NO GAMES.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We built FlowMaster on a simple idea: Toronto homeowners deserve a plumber they can 
                actually trust. No surprise invoices. No unnecessary upsells. No technicians who 
                treat your home like a job site.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                When we quote a price, that's the price. When we say 60 minutes, we mean it. 
                When we fix something, it stays fixed. That's the FlowMaster promise — 
                and it's why 10,000+ GTA families call us first.
              </p>
              <div className="space-y-3">
                {[
                  'Upfront flat-rate pricing — always',
                  'TSSA-certified technicians only',
                  'Clean, uniformed, background-checked crews',
                  '1-year parts & labour guarantee',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-copper-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2005', label: 'Founded in Toronto' },
                { value: '10K+', label: 'Satisfied Customers' },
                { value: '18+', label: 'Years of Service' },
                { value: '4.9★', label: 'Google Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="card-glass p-8 text-center group hover:bg-white/10 transition-all duration-300">
                  <div className="font-bebas text-4xl text-copper-400 mb-2">{value}</div>
                  <div className="text-slate-400 text-xs uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-tag mb-3">Our Journey</div>
            <h2 className="section-title">
              NEARLY 20 YEARS OF
              <br />
              <span className="text-copper-500">TORONTO HISTORY</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-copper-500 via-copper-500/50 to-transparent"></div>
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex items-start gap-8 pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 bg-navy-950 border-2 border-copper-500 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-copper-500 rounded-full"></div>
                  </div>
                  <div className="font-bebas text-2xl text-copper-500 min-w-[60px]">{year}</div>
                  <p className="text-slate-300 pt-1">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-tag mb-3">The FlowMaster Team</div>
            <h2 className="section-title">
              MEET THE EXPERTS
              <br />
              <span className="text-copper-500">BEHIND THE BRAND</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-glass p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-copper-500/30 to-copper-600/10 
                                border border-copper-500/30 flex items-center justify-center mx-auto mb-4
                                group-hover:border-copper-500/60 transition-all duration-300">
                  <span className="font-bebas text-2xl text-copper-400">{member.initials}</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                <div className="text-copper-500 text-xs font-medium mb-1">{member.role}</div>
                <div className="text-slate-500 text-xs mb-3">{member.cert}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Credentials & Awards</div>
            <h2 className="section-title">
              CERTIFIED. TRUSTED.
              <br />
              <span className="text-copper-500">RECOGNIZED.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="card-glass p-5 flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-copper-500/20 border border-copper-500/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-copper-500" />
                </div>
                <span className="text-slate-300 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-copper-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-bebas text-5xl text-white mb-4">READY TO WORK WITH THE BEST?</h2>
          <p className="text-white/80 mb-8">Join 10,000+ Toronto homeowners who trust FlowMaster.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+14165550100"
              className="bg-white text-copper-600 font-bold px-8 py-4 text-sm uppercase tracking-wide
                         hover:bg-navy-900 hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> 416-555-0100
            </a>
            <Link to="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 text-sm uppercase tracking-wide
                         hover:bg-white hover:text-copper-600 transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
