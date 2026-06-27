'use client'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Eunice delivered stunning, exceptionally professional work with remarkable professionalism. Their creative angles, lighting, attention to detail made our event truly memorable. Highly recommend!",
      name: "Varshan Ram",
      role: "Groom",
      image: "/testimonial-1.jpeg"
    },
    {
      text: "Thanks Eunice for best delivery. Eunice exceeded expectations. Their team captured every moment perfectly and professionally, giving us memories that will last a lifetime. Impeccable quality!",
      name: "Rahul Sanyal",
      role: "Groom",
      image: "/home-gallery-4.png"
    },
    {
      text: "Their photography was absolutely top-notch—clean, cinematic, and professional. Eunice exceeded our needs instantly and delivered exceptional results for our special day and portrait work.",
      name: "Nanditha",
      role: "Photographer",
      image: "/home-services-2.png"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtitle">Real stories from couples and clients who trusted us with their most precious moments.</p>
        <div className="testimonials-wrapper">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="rating-stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>{testimonial.text}</p>
                <div className="client-info">
                  <div className="client-details">
                    <strong>{testimonial.name}</strong>
                    <div>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
