import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

// Load env
dotenv.config()

import connectDB from './config/db.js'
import leadsRouter from './routes/leads.js'
import testimonialsRouter from './routes/testimonials.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// ─── Security Middleware ─────────────────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false, // Configure properly for production
}))

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}))

// ─── Rate Limiting ───────────────────────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 min
  max: parseInt(process.env.RATE_LIMIT_MAX || '100'),
  message: { success: false, message: 'Too many requests, please try again later.' },
})

const leadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { success: false, message: 'Too many submissions. Please call us directly.' },
})

app.use(globalLimiter)

// ─── Body Parsing ────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true }))

// ─── Logging ─────────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'))
}

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'healthy',
    service: 'FlowMaster Plumbing API',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  })
})

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use('/api/leads', leadLimiter, leadsRouter)
app.use('/api/testimonials', testimonialsRouter)

// ─── Serve Frontend in Production ────────────────────────────────────────────
if (process.env.NODE_ENV === 'production') {
  const frontendBuild = path.join(__dirname, '../frontend/dist')
  app.use(express.static(frontendBuild))
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendBuild, 'index.html'))
  })
}

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
})

// ─── Global Error Handler ────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'An unexpected error occurred'
      : err.message,
  })
})

// ─── Start Server ────────────────────────────────────────────────────────────
const startServer = async () => {
  await connectDB()
  app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════╗
║   FlowMaster Plumbing API                        ║
║   🚀 Running on http://localhost:${PORT}             ║
║   📊 Environment: ${(process.env.NODE_ENV || 'development').padEnd(30)}║
╚══════════════════════════════════════════════════╝
    `)
  })
}

startServer()

export default app
