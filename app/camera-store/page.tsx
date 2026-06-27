'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CameraStore() {
  const services = [
    {
      title: 'Camera & Accessories Sales',
      description: 'Wide range of professional cameras and accessories from top brands. Get expert advice on choosing the perfect gear for your needs.',
      image: '/home-gallery-1.png'
    },
    {
      title: 'Camera & Lens Rental',
      description: 'High-quality camera and lens rental services. Perfect for trying out equipment before purchasing or for specific projects.',
      image: '/home-gallery-2.png'
    },
    {
      title: 'Lighting Equipment Rental',
      description: 'Professional lighting equipment available for rent. Complete lighting setups for studios and on-location shoots.',
      image: '/home-gallery-3.png'
    },
    {
      title: 'Memory Cards & Pendrives',
      description: 'Fast and reliable memory cards and USB pendrives. Secure storage solutions for your valuable photos and videos.',
      image: '/home-gallery-4.png'
    },
    {
      title: 'Camera Batteries',
      description: 'Original and compatible camera batteries from trusted brands. Keep your cameras powered throughout your shoots.',
      image: '/home-gallery-5.png'
    },
    {
      title: 'Flash & Studio Lights',
      description: 'Professional flash units and studio lighting systems. Essential tools for perfect lighting in any shooting environment.',
      image: '/services-banner.jpg'
    }
  ]

  const overviewCategories = [
    {
      title: 'Photography Services',
      items: [
        'Wedding Photoshoot',
        'Outdoor Photo & Video Shoot',
        'New Born Baby Shoot',
        'Studio Rental',
        'Album Design',
        'Video Editing'
      ]
    },
    {
      title: 'Printing Lab',
      items: [
        'Album Printing',
        'Album Box Making',
        'Collage Frames',
        'Imported Frames',
        'Photo Printing',
        'Photo Enlargement'
      ]
    },
    {
      title: 'Custom Gifts',
      items: [
        'Customized Gifts',
        'Resin Art',
        'Photo Mugs',
        'T-Shirt Printing',
        'Customized Wall Clocks',
        'Personalized Photo Gifts'
      ]
    },
    {
      title: 'Camera Store',
      items: [
        'Camera & Accessories Sales',
        'Camera & Lens Rental',
        'Lighting Equipment Rental',
        'Memory Cards & Pendrives',
        'Camera Batteries',
        'Flash & Studio Lights'
      ]
    }
  ]

  return (
    <div>
      <Header />
      
      {/* Hero Banner */}
      <section className="camera-store-hero">
        <div className="hero-content">
          <h1>Professional Camera & Equipment Store</h1>
        </div>
      </section>

      {/* Camera Store Services */}
      <section className="camera-store-section">
        <div className="container">
          <div className="camera-store-header">
            <p className="camera-store-subtitle">Everything you need for professional photography. Sales, rentals, and expert advice all in one place</p>
          </div>

          <div className="camera-store-grid">
            {services.map((service, index) => (
              <div key={index} className="camera-store-service-card">
                <div className="service-card-wrapper">
                  <div className="service-flip-container">
                    <div className="service-flip-inner">
                      <div className="service-flip-front">
                        <img src={service.image} alt={service.title} />
                      </div>
                      <div className="service-flip-back">
                        <div className="service-back-content">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-info">
                    <h3>{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories Overview Section */}
          <div className="categories-overview-section">
            <div className="categories-overview-header">
              <h2>Our Services</h2>
              <p>
                Explore our comprehensive range of creative services, customized photo gifting, professional printing, and expert camera equipment.
              </p>
            </div>
            <div className="categories-overview-grid">
              {overviewCategories.map((category, catIndex) => (
                <div key={catIndex} className="category-card">
                  <h3>{category.title}</h3>
                  <ul className="category-items-list">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube Video Card */}
          <div className="youtube-section">
            <div className="youtube-card-wrapper">
              <div className="youtube-video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UQ5LzJesFGg?si=60L3anUhPIGlcD11"
                  title="Camera Store Showcase"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
