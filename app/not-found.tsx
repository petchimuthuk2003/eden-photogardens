'use client'

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <div style={{
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '40px 20px'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '16px', color: '#333' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '24px', color: '#666' }}>Page Not Found</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '32px', color: '#888', maxWidth: '500px' }}>
          Sorry, we couldn't find the page you're looking for. The page might have been removed or the URL might be incorrect.
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '12px 32px',
          background: '#ef7b09',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '30px',
          fontWeight: '600',
          fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}>
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  )
}
