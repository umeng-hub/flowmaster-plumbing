import nodemailer from 'nodemailer'

const createTransporter = () => {
  if (process.env.NODE_ENV === 'test' || !process.env.SMTP_HOST) {
    // In dev/test, just log emails
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export const sendLeadNotification = async (lead) => {
  const transporter = createTransporter()
  if (!transporter) {
    console.log('📧 [DEV] Lead notification (email not configured):', {
      name: lead.name,
      phone: lead.phone,
      service: lead.service,
      urgency: lead.urgency,
    })
    return
  }

  const urgencyMap = {
    emergency: '🚨 EMERGENCY',
    today: '⚡ Today',
    this_week: 'This Week',
    flexible: 'Flexible',
  }

  const subject = lead.urgency === 'emergency'
    ? `🚨 EMERGENCY LEAD: ${lead.service} — ${lead.name}`
    : `New Lead: ${lead.service} — ${lead.name}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #ff6b1a; padding: 20px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 24px;">NEW PLUMBING LEAD</h1>
        ${lead.urgency === 'emergency' 
          ? '<p style="color: white; font-size: 18px; font-weight: bold; margin: 8px 0 0;">🚨 EMERGENCY — RESPOND IMMEDIATELY</p>'
          : ''}
      </div>
      <div style="background: #f9f9f9; padding: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${lead.name}</td></tr>
          <tr style="background: white;"><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;"><a href="tel:${lead.phone}">${lead.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${lead.email}">${lead.email}</a></td></tr>
          <tr style="background: white;"><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${lead.service}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Urgency:</td><td style="padding: 8px; color: ${lead.urgency === 'emergency' ? 'red' : 'inherit'};">${urgencyMap[lead.urgency] || 'Not specified'}</td></tr>
          ${lead.address ? `<tr style="background: white;"><td style="padding: 8px; font-weight: bold;">Address:</td><td style="padding: 8px;">${lead.address}</td></tr>` : ''}
          <tr style="background: white;"><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px;">${lead.message}</td></tr>
        </table>
      </div>
      <div style="background: #0a1628; padding: 16px; text-align: center;">
        <p style="color: #999; font-size: 12px; margin: 0;">
          FlowMaster Plumbing CRM · Lead ID: ${lead._id} · ${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST
        </p>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"FlowMaster CRM" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    subject,
    html,
    replyTo: lead.email,
  })
}
