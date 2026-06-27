'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="logo">
            <Image src="/eden-logo.png" alt="" width={40} height={40} />
          </a>
          <ul className="nav-links">
            <li><a href="/" className={pathname === '/' ? 'active' : ''}>Home</a></li>
            <li><a href="/about" className={pathname === '/about' ? 'active' : ''}>About</a></li>
            <li><a href="/photography" className={pathname === '/photography' ? 'active' : ''}>Photography</a></li>
            <li><a href="/printing-lab" className={pathname === '/printing-lab' ? 'active' : ''}>Printing Lab</a></li>
            <li><a href="/custom-gifts" className={pathname === '/custom-gifts' ? 'active' : ''}>Custom Gifts</a></li>
            <li><a href="/camera-store" className={pathname === '/camera-store' ? 'active' : ''}>Camera Store</a></li>
            <li><a href="/gallery" className={pathname === '/gallery' ? 'active' : ''}>Gallery</a></li>
            <li><a href="/pricing" className={pathname === '/pricing' ? 'active' : ''}>Pricing</a></li>
          </ul>
          <a href="/contact" className="contact-btn">Contact Us</a>
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="/" onClick={() => setIsMenuOpen(false)} className={pathname === '/' ? 'active' : ''}>Home</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)} className={pathname === '/about' ? 'active' : ''}>About</a>
            <a href="/photography" onClick={() => setIsMenuOpen(false)} className={pathname === '/photography' ? 'active' : ''}>Photography</a>
            <a href="/printing-lab" onClick={() => setIsMenuOpen(false)} className={pathname === '/printing-lab' ? 'active' : ''}>Printing Lab</a>
            <a href="/custom-gifts" onClick={() => setIsMenuOpen(false)} className={pathname === '/custom-gifts' ? 'active' : ''}>Custom Gifts</a>
            <a href="/camera-store" onClick={() => setIsMenuOpen(false)} className={pathname === '/camera-store' ? 'active' : ''}>Camera Store</a>
            <a href="/gallery" onClick={() => setIsMenuOpen(false)} className={pathname === '/gallery' ? 'active' : ''}>Gallery</a>
            <a href="/pricing" onClick={() => setIsMenuOpen(false)} className={pathname === '/pricing' ? 'active' : ''}>Pricing</a>
            <a href="/contact" onClick={() => setIsMenuOpen(false)} className={pathname === '/contact' ? 'active' : ''}>Contact Us</a>
          </div>
        )}
      </div>
    </header>
  )
}