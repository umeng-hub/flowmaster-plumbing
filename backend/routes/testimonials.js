import express from 'express'
import Testimonial from '../models/Testimonial.js'

const router = express.Router()

// GET /api/testimonials — Public: approved testimonials
router.get('/', async (req, res) => {
  try {
    const { featured } = req.query
    const query = { approved: true }
    if (featured === 'true') query.featured = true

    const testimonials = await Testimonial.find(query)
      .sort({ createdAt: -1 })
      .limit(20)
      .select('-__v')

    res.json({ success: true, data: testimonials })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// POST /api/testimonials — Submit a review (requires moderation)
router.post('/', async (req, res) => {
  try {
    const { name, location, service, rating, text } = req.body
    if (!name || !text || !rating) {
      return res.status(422).json({ success: false, message: 'Name, rating, and review text required' })
    }

    const testimonial = await Testimonial.create({
      name, location, service, rating: Math.min(5, Math.max(1, rating)), text,
      approved: false, // requires admin approval
    })

    res.status(201).json({
      success: true,
      message: 'Thank you for your review! It will appear after moderation.',
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
