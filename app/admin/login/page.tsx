'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.error || 'Login failed. Please try again.')
        return
      }

      // Redirect to admin dashboard
      router.push('/admin')
      router.refresh()
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  return (
    <div className="admin-login-page">
      {/* Background */}
      <div className="admin-login-bg">
        <div className="admin-login-orb orb-1"></div>
        <div className="admin-login-orb orb-2"></div>
        <div className="admin-login-orb orb-3"></div>
      </div>

      {/* Login Card */}
      <div className="admin-login-card">
        {/* Logo */}
        <div className="admin-login-logo">
          <span className="admin-login-logo-icon">🌿</span>
          <div>
            <h1 className="admin-login-brand">Eden Photogarden</h1>
            <p className="admin-login-brand-sub">Admin Portal</p>
          </div>
        </div>

        <div className="admin-login-divider"></div>

        <h2 className="admin-login-title">Welcome back</h2>
        <p className="admin-login-subtitle">Sign in to access the admin dashboard</p>

        {/* Error Banner */}
        {status === 'error' && (
          <div className="admin-login-error">
            <span>⚠️</span>
            <span>{errorMsg}</span>
          </div>
        )}

        <form className="admin-login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="admin-login-field">
            <label htmlFor="admin-email">Email Address</label>
            <div className="admin-login-input-wrap">
              <span className="admin-login-input-icon">✉️</span>
              <input
                id="admin-email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className={status === 'error' ? 'input-shake' : ''}
              />
            </div>
          </div>

          {/* Password */}
          <div className="admin-login-field">
            <label htmlFor="admin-password">Password</label>
            <div className="admin-login-input-wrap">
              <span className="admin-login-input-icon">🔒</span>
              <input
                id="admin-password"
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className={status === 'error' ? 'input-shake' : ''}
              />
              <button
                type="button"
                className="admin-login-toggle-pass"
                onClick={() => setShowPass((p) => !p)}
                tabIndex={-1}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            id="admin-login-btn"
            className="admin-login-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="admin-login-btn-loading">
                <span className="admin-btn-spinner"></span>
                Signing in…
              </span>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>
        </form>

        <p className="admin-login-footer">
          🔐 Secure admin access only · Eden Photogarden
        </p>
      </div>
    </div>
  )
}
