# 🔧 FlowMaster Plumbing — Full-Stack Website

A modern, responsive, SEO-optimized plumbing company website built with **React + Vite**, **Node.js/Express**, **MongoDB**, and **Tailwind CSS**.

---

## 🗂 Project Structure

```
flowmaster-plumbing/
├── frontend/                    # React (Vite) Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   │   ├── Footer.jsx       # Full footer with service areas
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx     # Hero, stats, services, testimonials
│   │   │   ├── ServicesPage.jsx # Full service detail pages
│   │   │   ├── AboutPage.jsx    # Team, timeline, certifications
│   │   │   └── ContactPage.jsx  # Lead capture form
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # Tailwind + custom animations
│   ├── index.html               # SEO meta tags + schema markup
│   └── package.json
│
├── backend/                     # Node.js / Express API
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── models/
│   │   ├── Lead.js              # Lead capture model
│   │   └── Testimonial.js       # Review model
│   ├── routes/
│   │   ├── leads.js             # POST /api/leads
│   │   └── testimonials.js      # GET/POST /api/testimonials
│   ├── middleware/
│   │   └── mailer.js            # Nodemailer email notifications
│   ├── scripts/
│   │   └── seed.js              # Database seeder
│   ├── server.js                # Express app + security middleware
│   └── package.json
│
├── package.json                 # Root scripts (concurrently)
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourorg/flowmaster-plumbing
cd flowmaster-plumbing
npm install                      # Install root devDeps
npm run install:all              # Install frontend + backend deps
```

### 2. Environment Setup

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your MongoDB URI and SMTP credentials

# Frontend (optional)
# VITE_API_URL is proxied in dev, only needed for production builds
```

### 3. Start Development

```bash
npm run dev        # Starts both frontend (port 5173) and backend (port 5000)
# OR individually:
npm run dev:frontend
npm run dev:backend
```

### 4. Seed the Database (optional)

```bash
npm run seed       # Adds sample testimonials
```

---

## 🔌 API Endpoints

| Method | Route                  | Description                     |
|--------|------------------------|---------------------------------|
| GET    | /api/health            | Health check                    |
| POST   | /api/leads             | Submit new lead/quote request   |
| GET    | /api/leads             | List leads (admin)              |
| PATCH  | /api/leads/:id         | Update lead status (admin)      |
| GET    | /api/testimonials      | Get approved testimonials       |
| POST   | /api/testimonials      | Submit review (pending review)  |

### POST /api/leads — Request Body

```json
{
  "name": "John Smith",
  "email": "john@email.com",
  "phone": "416-555-0000",
  "service": "Drain Cleaning",
  "urgency": "today",
  "address": "123 Main St, Toronto, ON",
  "message": "Kitchen drain is completely blocked."
}
```

---

## 🔒 Security Features

- **Helmet.js** — HTTP security headers
- **CORS** — Restricted to frontend origin
- **Rate limiting** — Global (100/15min) + Lead route (10/hour)
- **Input validation** — express-validator on all POST routes
- **Environment variables** — All sensitive data externalized

---

## 🎨 Design System

| Token        | Value           | Usage                     |
|-------------|-----------------|---------------------------|
| Navy 950    | `#060d1a`       | Background                |
| Navy 900    | `#0a1628`       | Section backgrounds       |
| Copper 500  | `#ff6b1a`       | Primary accent            |
| Copper 400  | `#ff8c42`       | Hover states              |
| Slate 400   | Body text       | Paragraphs                |

**Fonts:**
- Display: `Bebas Neue` — headings, section titles
- Body: `DM Sans` — paragraphs, UI elements
- Accent: `DM Serif Display` — pull quotes

---

## 🚀 Production Deployment

### Option A: Monolith (Express serves React build)

```bash
npm run build:frontend
NODE_ENV=production npm start
```

### Option B: Split Deployment

**Frontend → Vercel / Netlify:**
```bash
cd frontend && npm run build
# Deploy ./dist to Vercel/Netlify
# Set VITE_API_URL=https://your-api.com
```

**Backend → Railway / Render / EC2:**
```bash
# Set environment variables in hosting dashboard
# Set FRONTEND_URL=https://flowmasterplumbing.ca
cd backend && npm start
```

### Required Environment Variables (Production)

```
MONGODB_URI=mongodb+srv://...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=app_password
NOTIFY_EMAIL=leads@flowmasterplumbing.ca
FRONTEND_URL=https://flowmasterplumbing.ca
NODE_ENV=production
```

---

## 📍 SEO Features

- **Semantic HTML5** structure (header, main, section, article)
- **Schema.org LocalBusiness JSON-LD** markup
- **Open Graph & Twitter Card** meta tags
- **Canonical URLs** set
- **Keyword-rich meta descriptions** targeting GTA
- **Service area pages** with city-level targeting
- **Google Rating Schema** (4.9★, 847 reviews)

### Target Keywords

- plumber Toronto
- emergency plumber GTA
- drain cleaning Toronto
- water heater installation Mississauga
- licensed plumber Ontario

---

## 📦 Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | React 18 + Vite 5             |
| Styling    | Tailwind CSS 3                |
| Routing    | React Router DOM 6            |
| Backend    | Node.js + Express 4           |
| Database   | MongoDB + Mongoose 8          |
| Email      | Nodemailer                    |
| Security   | Helmet + CORS + Rate Limiting |
| Validation | express-validator             |

---

## 📞 Company Info (Customize)

Update these in the following files:
- `frontend/index.html` — Meta tags, schema, phone numbers
- `frontend/src/components/Navbar.jsx` — Phone number
- `frontend/src/components/Footer.jsx` — Address, email, phone
- `frontend/src/pages/ContactPage.jsx` — Contact details
- `backend/.env` — SMTP + notification settings

---

*Built for FlowMaster Plumbing Inc., serving the Greater Toronto Area.*
# flowmaster-plumbing
