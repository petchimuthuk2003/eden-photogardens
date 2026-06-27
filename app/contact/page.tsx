'use client'

import { useState, FormEvent } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

type FormState = {
  name: string
  phone: string
  email: string
  service: string
  date: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div>
      <Header />
      
      {/* Hero Banner */}
      <section className="contact-hero">
        <h1>We're Here to Capture Your Best Moments</h1>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>

            {/* Success Banner */}
            {status === 'success' && (
              <div className="form-success-banner">
                <span className="form-success-icon">✅</span>
                <div>
                  <strong>Inquiry Submitted!</strong>
                  <p>Thank you, we'll respond within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Error Banner */}
            {status === 'error' && (
              <div className="form-error-banner">
                <span>⚠️</span>
                <p>{errorMsg}</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 00000 00000"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Type of Service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="couple">Couple Shoots</option>
                  <option value="model">Model Portfolios</option>
                  <option value="kids">Kids Photography</option>
                  <option value="maternity">Maternity Photography</option>
                  <option value="studio">Studio Portraits</option>
                  <option value="events">Events</option>
                  <option value="outdoor">Outdoor Sessions</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Event Date / Shoot Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, location, special requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="submit-btn"
                disabled={status === 'loading'}
                id="contact-submit-btn"
              >
                {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
              </button>
              
              <p className="response-note">We'll respond within 24 hours.</p>
            </form>
          </div>
        </div>
      </section>
      
      {/* Social Media Connect */}
      <section className="social-connect-section">
        <div className="container">
          <h2>Follow Our Creative Journey</h2>
          <p>See our latest shoots, videos, and behind-the-scenes moments.</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/edenphotogarden" className="social-icon instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/edenphotogarden" className="social-icon facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://www.youtube.com/@edenphotogarden" className="social-icon youtube" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
              </svg>
              <span>YouTube</span>
            </a>
            <a href="https://wa.me/919944553202" className="social-icon whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}