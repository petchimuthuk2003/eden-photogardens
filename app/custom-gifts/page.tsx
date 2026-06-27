'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CustomGifts() {
  const services = [
    {
      title: 'Customized Gifts',
      description: 'Personalized gift items tailored to your preferences. Create unique, one-of-a-kind gifts that express your personal style and sentiment.',
      image: '/home-gallery-1.png'
    },
    {
      title: 'Resin Art',
      description: 'Beautiful hand-crafted resin art pieces featuring your photos. Modern, durable, and perfect for contemporary home decor.',
      image: '/home-gallery-2.png'
    },
    {
      title: 'Photo Mugs',
      description: 'Custom photo mugs with vibrant printing. Perfect for daily use and thoughtful gifts for loved ones.',
      image: '/home-gallery-3.png'
    },
    {
      title: 'T-Shirt Printing',
      description: 'High-quality custom t-shirt printing with your photos and designs. Comfortable, durable, and uniquely yours.',
      image: '/home-gallery-4.png'
    },
    {
      title: 'Customized Wall Clocks',
      description: 'Custom wall clocks featuring your favorite photos. Functional art that adds personality to any space.',
      image: '/home-gallery-5.png'
    },
    {
      title: 'Personalized Photo Gifts',
      description: 'Wide range of personalized photo gift options. From keychains to blankets, we have something special for everyone.',
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
      <section className="custom-gifts-hero">
        <div className="hero-content">
          <h1>Customized Gift Solutions</h1>
        </div>
      </section>

      {/* Custom Gifts Services */}
      <section className="custom-gifts-section">
        <div className="container">
          <div className="custom-gifts-header">
            <p className="custom-gifts-subtitle">Create unforgettable memories with our unique custom gift options. Perfect for any occasion</p>
          </div>

          <div className="custom-gifts-grid">
            {services.map((service, index) => (
              <div key={index} className="custom-gifts-service-card">
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
                  title="Custom Gifts Showcase"
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
