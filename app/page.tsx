'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <section className="meet-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-subtitle">The creative minds behind every perfect shot and unforgettable moment.</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src="/about-team-1.jpg" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Sarah Johnson</h3>
                <p className="team-role">Lead Photographer</p>
                <p>With 8+ years of experience in wedding and portrait photography, Sarah brings artistic vision and technical expertise to every shoot.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="/about-team-2.jpg" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Michael Chen</h3>
                <p className="team-role">Videographer & Editor</p>
                <p>Specializing in cinematic storytelling, Michael creates stunning video content that captures the essence of your special moments.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src="/about-team-3.webp" alt="Team Member" />
              </div>
              <div className="team-info">
                <h3>Priya Sharma</h3>
                <p className="team-role">Event Coordinator</p>
                <p>Ensuring seamless execution of every project, Priya manages timelines and coordinates with clients for stress-free experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </main>
  )
}