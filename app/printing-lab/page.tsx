'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function PrintingLab() {
  const services = [
    {
      title: 'Album Printing',
      description: 'Premium quality photo albums with professional printing and binding. Custom layouts and finishes to preserve your precious memories beautifully.',
      image: '/home-gallery-1.png'
    },
    {
      title: 'Album Box Making',
      description: 'Elegantly crafted custom boxes for your albums. Perfect for gifting and storage with personalized designs and premium materials.',
      image: '/home-gallery-2.png'
    },
    {
      title: 'Collage Frames',
      description: 'Beautiful multi-photo collage frames to display your favorite moments. Custom arrangements with premium framing options available.',
      image: '/home-gallery-3.png'
    },
    {
      title: 'Imported Frames',
      description: 'Imported high-quality frames from around the world. Elegant designs suitable for professional photographs and personal collections.',
      image: '/home-gallery-4.png'
    },
    {
      title: 'Photo Printing',
      description: 'Professional photo printing services with vibrant colors and superior quality. Available in various sizes and finishes.',
      image: '/home-gallery-5.png'
    },
    {
      title: 'Photo Enlargement',
      description: 'Enlarge your favorite photos to stunning sizes without quality loss. Perfect for wall displays and home decor.',
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
      <section className="printing-hero">
        <div className="hero-content">
          <h1>Professional Printing Lab Services</h1>
        </div>
      </section>

      {/* Printing Lab Services */}
      <section className="printing-section">
        <div className="container">
          <div className="printing-header">
            <p className="printing-subtitle">Transform your digital photos into stunning physical prints and frames that last a lifetime</p>
          </div>

          <div className="printing-grid">
            {services.map((service, index) => (
              <div key={index} className="printing-service-card">
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
                  title="Professional Printing Lab Showcase"
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
