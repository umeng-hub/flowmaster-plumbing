import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Send } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const services = [
  'Drain Cleaning',
  'Leak Repair',
  'Water Heater Installation',
  'Emergency Plumbing',
  'Toilet & Faucet Repair',
  'Pipe Replacement',
  'Other',
]

const urgency = [
  { value: 'emergency', label: 'Emergency (ASAP)' },
  { value: 'today', label: 'Today' },
  { value: 'this_week', label: 'This Week' },
  { value: 'flexible', label: 'I\'m Flexible' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    service: '', urgency: '', message: '', address: ''
  })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email required'
    if (!form.phone.match(/^[\d\s\-\+\(\)]{7,15}$/)) errs.phone = 'Valid phone required'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.message.trim()) errs.message = 'Please describe your issue'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', service: '', urgency: '', message: '', address: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute left-1/4 top-1/2 w-96 h-96 bg-copper-500/8 rounded-full blur-[100px]"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="section-tag mb-4">Get In Touch</div>
          <h1 className="section-title mb-4">
            REQUEST YOUR
            <br />
            <span className="text-copper-500">FREE ESTIMATE</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Fill out the form below and our team will respond within 30 minutes during business hours.
            For emergencies, call us directly at{' '}
            <a href="tel:+14165550100" className="text-copper-400 font-semibold">416-555-0100</a>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-bebas text-3xl text-white mb-6">CONTACT DETAILS</h2>
              </div>

              {[
                {
                  icon: Phone,
                  label: 'Emergency Line',
                  value: '416-555-0100',
                  sub: 'Available 24/7/365',
                  href: 'tel:+14165550100',
                  highlight: true,
                },
                {
                  icon: Phone,
                  label: 'Office Line',
                  value: '416-555-0200',
                  sub: 'Mon–Fri: 8AM–7PM',
                  href: 'tel:+14165550200',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@flowmasterplumbing.ca',
                  href: 'mailto:info@flowmasterplumbing.ca',
                },
                {
                  icon: MapPin,
                  label: 'Office',
                  value: '123 King Street West',
                  sub: 'Toronto, ON M5H 1A1',
                },
                {
                  icon: Clock,
                  label: 'Hours',
                  value: '24 Hours / 7 Days',
                  sub: 'Emergency service always available',
                },
              ].map((item) => (
                <div key={item.label}
                  className={`card-glass p-5 flex items-start gap-4 ${item.highlight ? 'border-copper-500/30 bg-copper-500/5' : ''}`}>
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0
                                  ${item.highlight ? 'bg-copper-500' : 'bg-copper-500/15 border border-copper-500/25'}`}>
                    <item.icon className={`w-4 h-4 ${item.highlight ? 'text-white' : 'text-copper-500'}`} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold hover:text-copper-400 transition-colors text-sm block">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white font-semibold text-sm">{item.value}</div>
                    )}
                    {item.sub && <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>}
                  </div>
                </div>
              ))}

              <div className="card-glass p-5">
                <h4 className="font-bebas text-lg text-white mb-3">Service Areas</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Toronto · Mississauga · Brampton · Vaughan · Markham · Richmond Hill · 
                  Oakville · Scarborough · North York · Etobicoke · Ajax · Pickering
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-glass p-8">
                <h3 className="font-bebas text-2xl text-white mb-6">REQUEST A QUOTE</h3>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="font-bebas text-3xl text-white mb-2">Request Submitted!</h4>
                    <p className="text-slate-400 max-w-sm">
                      Thank you! Our team will contact you within 30 minutes. 
                      For urgent issues, please call <a href="tel:+14165550100" className="text-copper-400">416-555-0100</a>.
                    </p>
                    <button
                      onClick={() => setStatus(null)}
                      className="mt-6 btn-secondary"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="416-555-0000"
                          className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                        Service Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="123 Main St, Toronto, ON"
                        className="input-field"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                          Service Needed *
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={`input-field ${errors.service ? 'border-red-500' : ''}`}
                        >
                          <option value="">Select service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                      </div>
                      <div>
                        <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                          How Urgent?
                        </label>
                        <select
                          name="urgency"
                          value={form.urgency}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select urgency...</option>
                          {urgency.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 uppercase tracking-wide block mb-1.5">
                        Describe Your Issue *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please describe the problem you're experiencing, including any relevant details..."
                        className={`input-field resize-none ${errors.message ? 'border-red-500' : ''}`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 p-4">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-sm">
                          Something went wrong. Please call us at{' '}
                          <a href="tel:+14165550100" className="font-semibold underline">416-555-0100</a>.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Request
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to our privacy policy. We'll respond within 30 minutes during business hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
