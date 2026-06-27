'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <section className="services-hero">
          <div className="hero-content">
            <h1>Professional Photography & Videography Services</h1>
          </div>
        </section>
        <section className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <img src="/home-services-1.png" alt="Wedding Photography" />
                <div className="service-info">
                  <h3>Wedding Photography</h3>
                  <p>Candid, traditional, cinematic coverage</p>
                </div>
              </div>
              <div className="service-card">
                <img src="/home-services-2.png" alt="Model Shooting" />
                <div className="service-info">
                  <h3>Model Shooting</h3>
                  <p>Professional model fashion shoots</p>
                </div>
              </div>
              <div className="service-card">
                <img src="/home-services-3.png" alt="Baby Photo Shooting" />
                <div className="service-info">
                  <h3>Baby Photo Shooting</h3>
                  <p>Indoor & outdoor shoots</p>
                </div>
              </div>
              <div className="service-card">
                <img src="/home-services-4.png" alt="Maternity Photo Shooting" />
                <div className="service-info">
                  <h3>Maternity Photo Shooting</h3>
                  <p>Indoor & outdoor shoots</p>
                </div>
              </div>
              <div className="service-card">
                <img src="/home-services-5.png" alt="Studio Portraits" />
                <div className="service-info">
                  <h3>Studio Portraits</h3>
                  <p>Family portraits, corporate headshots</p>
                </div>
              </div>
              <div className="service-card">
                <img src="/home-services-6.png" alt="Event Coverage" />
                <div className="service-info">
                  <h3>Event Coverage</h3>
                  <p>Engagements, birthdays, receptions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="addon-enhancements">
          <div className="container">
            <h2>Add-On Enhancements</h2>
            <div className="addon-grid">
              <div className="addon-item">
                <div className="addon-icon">📸</div>
                <h3>Extra photographer</h3>
              </div>
              <div className="addon-item">
                <div className="addon-icon">🚁</div>
                <h3>Drone operator</h3>
              </div>
              <div className="addon-item">
                <div className="addon-icon">🎬</div>
                <h3>Reels/Instagram edit</h3>
              </div>
              <div className="addon-item">
                <div className="addon-icon">⚡</div>
                <h3>Same-day teaser</h3>
              </div>
              <div className="addon-item">
                <div className="addon-icon">👗</div>
                <h3>Props & outfit styling</h3>
              </div>
              <div className="addon-item">
                <div className="addon-icon">🌅</div>
                <h3>Exclusive outdoor locations</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work">
          <div className="container">
            <h2>How We Work</h2>
            <p className="work-subtitle">Our streamlined process ensures exceptional results from concept to delivery.</p>
            <div className="work-steps">
              <div className="work-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Consultation</h3>
                  <p>Understand your expectations, themes, and shoot ideas.</p>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="work-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Planning</h3>
                  <p>Location scouting, mood setups, outfits, and lighting plans.</p>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="work-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Photoshoot</h3>
                  <p>Professional execution with direction, creativity, and comfort.</p>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="work-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Delivery</h3>
                  <p>High-quality edited photos, films, and albums delivered on time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Capture Your Best Moments?</h2>
            <a href="/contact" className="book-session-btn">Book Your Session</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}