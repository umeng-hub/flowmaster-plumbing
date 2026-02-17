import express from 'express'
import { body, validationResult } from 'express-validator'
import Lead from '../models/Lead.js'
import { sendLeadNotification } from '../middleware/mailer.js'

const router = express.Router()

// Validation rules
const leadValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be 2–100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email required'),
  body('phone')
    .trim()
    .matches(/^[\d\s\-\+\(\)]{7,15}$/)
    .withMessage('Valid phone number required'),
  body('service')
    .notEmpty()
    .withMessage('Service selection required'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be 10–2000 characters'),
]

// POST /api/leads — Submit a new lead
router.post('/', leadValidation, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array().map(e => ({ field: e.path, message: e.msg })),
    })
  }

  try {
    const { name, email, phone, service, urgency, address, message } = req.body

    const lead = await Lead.create({
      name, email, phone, service,
      urgency: urgency || '',
      address: address || '',
      message,
      source: 'website',
    })

    // Send email notification (non-blocking)
    sendLeadNotification(lead).catch(err =>
      console.error('Email notification failed:', err.message)
    )

    res.status(201).json({
      success: true,
      message: 'Your request has been received! We\'ll contact you within 30 minutes.',
      data: { id: lead._id },
    })
  } catch (error) {
    console.error('Lead creation error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error. Please call us directly at 416-555-0100.',
    })
  }
})

// GET /api/leads — Admin list (protect with auth in production)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query
    const query = status ? { status } : {}

    const leads = await Lead.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('-__v')

    const total = await Lead.countDocuments(query)

    res.json({
      success: true,
      data: leads,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

// PATCH /api/leads/:id — Update lead status
router.patch('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { ...(status && { status }), ...(notes !== undefined && { notes }) },
      { new: true, runValidators: true }
    )

    if (!lead) return res.status(404).json({ success: false, message: 'Lead not found' })
    res.json({ success: true, data: lead })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' })
  }
})

export default router
