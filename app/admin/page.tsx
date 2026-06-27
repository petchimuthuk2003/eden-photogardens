'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Inquiry = {
  id: number
  name: string
  phone: string
  email: string
  service: string
  date: string | null
  message: string | null
  createdAt: string
}

const SERVICE_LABELS: Record<string, string> = {
  wedding: 'Wedding Photography',
  couple: 'Couple Shoots',
  model: 'Model Portfolios',
  kids: 'Kids Photography',
  maternity: 'Maternity Photography',
  studio: 'Studio Portraits',
  events: 'Events',
  outdoor: 'Outdoor Sessions',
}

export default function AdminPage() {
  const router = useRouter()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [authChecked, setAuthChecked] = useState(false)

  // Check auth by hitting a protected endpoint
  useEffect(() => {
    fetch('/api/contact')
      .then((res) => {
        // If the API fails with 401, redirect to login
        if (res.status === 401) {
          router.replace('/admin/login')
          return null
        }
        return res.json()
      })
      .then((data) => {
        if (!data) return
        setAuthChecked(true)
        if (data.error) {
          setError(data.error)
        } else {
          setInquiries(data.inquiries)
        }
      })
      .catch(() => {
        setError('Failed to load inquiries.')
        setAuthChecked(true)
      })
      .finally(() => setLoading(false))
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.replace('/admin/login')
  }

  const filtered = inquiries.filter(
    (inq) =>
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      inq.phone.includes(search) ||
      inq.service.toLowerCase().includes(search.toLowerCase())
  )

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

  return (
    <div className="admin-page">
      {/* Admin Header */}
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-brand">
            <span className="admin-brand-icon">🌿</span>
            <div>
              <h1>Eden Photogarden</h1>
              <span>Admin Dashboard</span>
            </div>
          </div>
          <div className="admin-header-actions">
            <Link href="/" className="admin-back-btn">
              ← Back to Site
            </Link>
            <button
              id="admin-logout-btn"
              className="admin-logout-btn"
              onClick={handleLogout}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </header>

      <main className="admin-main">
        {/* Stats Row */}
        <div className="admin-stats-row">
          <div className="admin-stat-card">
            <span className="stat-number">{inquiries.length}</span>
            <span className="stat-label">Total Inquiries</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-number">
              {inquiries.filter((i) => {
                const d = new Date(i.createdAt)
                const now = new Date()
                return (
                  d.getDate() === now.getDate() &&
                  d.getMonth() === now.getMonth() &&
                  d.getFullYear() === now.getFullYear()
                )
              }).length}
            </span>
            <span className="stat-label">Today</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-number">
              {inquiries.filter((i) => i.service === 'wedding').length}
            </span>
            <span className="stat-label">Wedding Bookings</span>
          </div>
          <div className="admin-stat-card">
            <span className="stat-number">
              {Array.from(new Set(inquiries.map((i) => i.service))).length}
            </span>
            <span className="stat-label">Service Types</span>
          </div>
        </div>

        {/* Search */}
        <div className="admin-toolbar">
          <h2 className="admin-section-title">Contact Inquiries</h2>
          <div className="admin-search-wrapper">
            <span className="admin-search-icon">🔍</span>
            <input
              type="text"
              id="admin-search"
              className="admin-search"
              placeholder="Search by name, email, phone, or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Content */}
        {loading && (
          <div className="admin-loading">
            <div className="admin-spinner"></div>
            <p>Loading inquiries...</p>
          </div>
        )}

        {error && (
          <div className="admin-error">
            <span>⚠️</span> {error}
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <div className="admin-empty">
            <span className="admin-empty-icon">📭</span>
            <p>{search ? 'No results match your search.' : 'No inquiries yet. They will appear here once submitted.'}</p>
          </div>
        )}

        {!loading && !error && filtered.length > 0 && (
          <div className="admin-table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Event Date</th>
                  <th>Message</th>
                  <th>Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((inq, idx) => (
                  <tr key={inq.id} id={`inquiry-${inq.id}`}>
                    <td className="admin-td-id">{idx + 1}</td>
                    <td className="admin-td-name">{inq.name}</td>
                    <td>
                      <a href={`tel:${inq.phone}`} className="admin-phone-link">
                        {inq.phone}
                      </a>
                    </td>
                    <td>
                      <a href={`mailto:${inq.email}`} className="admin-email-link">
                        {inq.email}
                      </a>
                    </td>
                    <td>
                      <span className="admin-service-badge">
                        {SERVICE_LABELS[inq.service] || inq.service}
                      </span>
                    </td>
                    <td>{inq.date || '—'}</td>
                    <td className="admin-td-message">
                      {inq.message ? (
                        <span title={inq.message}>
                          {inq.message.length > 60
                            ? inq.message.slice(0, 60) + '…'
                            : inq.message}
                        </span>
                      ) : (
                        <span className="admin-no-message">—</span>
                      )}
                    </td>
                    <td className="admin-td-date">{formatDate(inq.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  )
}
