import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import connectDB from '../config/db.js'
import Testimonial from '../models/Testimonial.js'
import Lead from '../models/Lead.js'

const testimonials = [
  {
    name: 'Sandra K.',
    location: 'North York, ON',
    service: 'Emergency Plumbing',
    rating: 5,
    text: 'FlowMaster arrived within the hour on a Sunday night when our basement was flooding. Professional, fast, and reasonably priced. Cannot recommend enough.',
    featured: true,
    approved: true,
  },
  {
    name: 'Michael T.',
    location: 'Mississauga, ON',
    service: 'Water Heater Install',
    rating: 5,
    text: 'Had three quotes for water heater installation. FlowMaster was honest, upfront, and did an immaculate job. The team was respectful of our home throughout.',
    featured: true,
    approved: true,
  },
  {
    name: 'Priya M.',
    location: 'Vaughan, ON',
    service: 'Drain Cleaning',
    rating: 5,
    text: "Our drain was backing up for months and others couldn't fix it permanently. FlowMaster used camera inspection to find a root issue — problem solved in 2 hours!",
    featured: true,
    approved: true,
  },
  {
    name: 'Robert L.',
    location: 'Scarborough, ON',
    service: 'Leak Repair',
    rating: 5,
    text: 'The team found a slab leak that two other companies missed. Saved us from massive water damage. Worth every penny — incredible work.',
    featured: false,
    approved: true,
  },
  {
    name: 'Fatima A.',
    location: 'Brampton, ON',
    service: 'Toilet & Faucet Repair',
    rating: 5,
    text: 'Quick, efficient, and polite. Fixed my running toilet in 30 minutes. The technician even spotted a slow drip under the sink and fixed that too at no extra charge.',
    featured: false,
    approved: true,
  },
]

const seed = async () => {
  await connectDB()
  console.log('🌱 Seeding database...')

  await Testimonial.deleteMany({})
  await Testimonial.insertMany(testimonials)
  console.log(`✅ ${testimonials.length} testimonials seeded`)

  console.log('✅ Database seeded successfully!')
  process.exit(0)
}

seed().catch(err => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
