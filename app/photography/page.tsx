'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Photography() {
  const services = [
    {
      title: 'Wedding Photoshoot',
      description: 'Capture every moment of your special day with our professional wedding photography services. From ceremonies to receptions, we preserve your love story beautifully.',
      image: '/home-gallery-1.png'
    },
    {
      title: 'Outdoor Photo & Video Shoot',
      description: 'Beautiful outdoor photography and videography in natural settings. Capture stunning moments with natural lighting and scenic backdrops for your special occasions.',
      image: '/services-banner.jpg'
    },
    {
      title: 'New Born Baby Shoot',
      description: 'Celebrate the arrival of your little one with beautiful newborn photography. Gentle, safe, and capturing precious first moments with your bundle of joy.',
      image: '/home-gallery-2.png'
    },
    {
      title: 'Studio Rental',
      description: 'Professional studio space available for rent with state-of-the-art equipment. Perfect for shoots, product photography, and creative projects of all kinds.',
      image: '/home-gallery-3.png'
    },
    {
      title: 'Album Design',
      description: 'Transform your favorite photos into stunning, professionally designed albums. Custom layouts and premium finishes that tell your unique story elegantly.',
      image: '/home-gallery-4.png'
    },
    {
      title: 'Video Editing',
      description: 'Professional video editing services to create cinematic highlights, event films, and creative video content that brings your moments to life.',
      image: '/home-gallery-5.png'
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
      <section className="photography-hero">
        <div className="hero-content">
          <h1>Professional Photography Services</h1>
        </div>
      </section>

      {/* Photography Services */}
      <section className="photography-section">
        <div className="container">
          <div className="photography-header">
            <p className="photography-subtitle">Explore our range of specialized photography and video services designed to capture your most precious moments</p>
          </div>

          <div className="photography-grid">
            {services.map((service, index) => (
              <div key={index} className="photography-service-card">
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
                  title="Professional Photography Showcase"
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
