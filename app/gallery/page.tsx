'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Gallery() {
  return (
    <div>
      <Header />
      
      {/* Hero Banner */}
      <section className="gallery-hero">
        <h1>Every Moment. Every Emotion.</h1>
      </section>

      {/* Gallery Categories */}
      <section className="gallery-showcase">
        <div className="container">
          <h2>Gallery Categories</h2>
          <div className="gallery-categories-grid">
            <div className="gallery-category-card">
              <img src="/home-gallery-3.png" alt="Weddings" />
              <div className="gallery-card-info">
                <h3>Weddings</h3>
                <p>Capturing vibrant celebrations, rituals, and candid emotions with cinematic style.</p>
              </div>
            </div>
            <div className="gallery-category-card">
              <img src="/gallery-image-2.jpg" alt="Couple Shoots" />
              <div className="gallery-card-info">
                <h3>Couple Shoots</h3>
                <p>Romantic, aesthetic frames that tell your love story with elegance.</p>
              </div>
            </div>
            <div className="gallery-category-card">
              <img src="/gallery-image-4.jpg" alt="Kids" />
              <div className="gallery-card-info">
                <h3>Kids</h3>
                <p>The purest smiles, the warmest emotions, and precious milestones.</p>
              </div>
            </div>
            <div className="gallery-category-card">
              <img src="/gallery-image-5.jpg" alt="Events" />
              <div className="gallery-card-info">
                <h3>Events</h3>
                <p>Seamless coverage of engagements, birthdays, corporate functions, and receptions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}