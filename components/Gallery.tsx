export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2>Featured Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item gallery-tall">
            <img src="/home-gallery-1.png" alt="Event photo" />
          </div>
          <div className="gallery-item">
            <img src="/home-gallery-2.png" alt="Wedding photo" />
          </div>
          <div className="gallery-item">
            <img src="/home-gallery-3.png" alt="Portrait photo" />
          </div>
          <div className="gallery-item">
            <img src="/home-gallery-4.png" alt="Wedding photo" />
          </div>
          <div className="gallery-item">
            <img src="/home-gallery-5.png" alt="Portrait photo" />
          </div>
        </div>
        <a href="/gallery" className="explore-btn">Explore All</a>
      </div>
    </section>
  )
}