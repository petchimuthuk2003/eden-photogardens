export default function Services() {
  const services = [
    {
      title: "Wedding Photoshoot",
      description: "Capture every moment of your special day with our professional wedding photography services. From ceremonies to receptions, we preserve your love story beautifully.",
      image: "/home-gallery-1.png"
    },
    {
      title: "Studio Rental",
      description: "Professional studio space available for rent with state-of-the-art equipment. Perfect for shoots, product photography, and creative projects of all kinds.",
      image: "/home-gallery-3.png"
    },
    {
      title: "Album Printing",
      description: "Transform your favorite photos into stunning, professionally designed albums. Custom layouts and premium finishes that tell your unique story elegantly.",
      image: "/home-gallery-4.png"
    },
    {
      title: "Customized Gifts",
      description: "Create personalized gifts featuring your treasured photos. From custom mugs to framed prints, each item is crafted with care and precision.",
      image: "/home-gallery-5.png"
    },
    {
      title: "T-Shirt Printing",
      description: "Transform your favorite photos into custom-printed t-shirts. High-quality prints that look great and last long, perfect for memorable gifts.",
      image: "/home-services-5.png"
    },
    {
      title: "Camera & Accessories Sales",
      description: "Explore our selection of professional cameras and photography equipment. Expert advice to help you choose the perfect gear for your needs.",
      image: "/home-services-1.png"
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <h2>Services Highlight</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
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
      </div>
    </section>
  )
}