import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    trim: true,
  },
  service: {
    type: String,
    required: [true, 'Service selection is required'],
    enum: [
      'Drain Cleaning',
      'Leak Repair',
      'Water Heater Installation',
      'Emergency Plumbing',
      'Toilet & Faucet Repair',
      'Pipe Replacement',
      'Other',
    ],
  },
  urgency: {
    type: String,
    enum: ['emergency', 'today', 'this_week', 'flexible', ''],
    default: '',
  },
  address: {
    type: String,
    trim: true,
    maxlength: [200, 'Address too long'],
    default: '',
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message too long'],
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'quoted', 'booked', 'completed', 'cancelled'],
    default: 'new',
  },
  source: {
    type: String,
    default: 'website',
  },
  notes: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
})

// Index for quick admin queries
leadSchema.index({ status: 1, createdAt: -1 })
leadSchema.index({ email: 1 })

const Lead = mongoose.model('Lead', leadSchema)
export default Lead
