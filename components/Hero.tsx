'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    '/hero-image.png',
    '/services-banner.jpg',
    '/gallery-image-5.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${slide}')`,
            }}
          />
        ))}
      </div>
      <div className="hero-content">
        <h1>Capturing The Magics of Your Special Day</h1>
        <a href="/contact" className="book-btn">Book Now</a>
      </div>
    </section>
  )
}