import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  service: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  text: { type: String, required: true, trim: true },
  featured: { type: Boolean, default: false },
  approved: { type: Boolean, default: false },
}, { timestamps: true })

const Testimonial = mongoose.model('Testimonial', testimonialSchema)
export default Testimonial
