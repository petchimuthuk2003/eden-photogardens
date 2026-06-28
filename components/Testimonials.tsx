'use client'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Eunice delivered stunning, professional work with creative angles, beautiful lighting, and careful attention to every important moment.",
      name: "Varshan Ram",
      role: "Groom"
    },
    {
      text: "The team captured our event perfectly and delivered memories we will always treasure. The quality and service were excellent from start to finish.",
      name: "Rahul Sanyal",
      role: "Groom"
    },
    {
      text: "Their photography felt clean, cinematic, and polished. Eden Photo Garden understood the brief quickly and delivered exactly what we needed.",
      name: "Nanditha",
      role: "Photographer"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtitle">Kind words from clients who trusted us with their favorite moments.</p>
        <div className="testimonials-wrapper">
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial">
                <div className="rating-stars" aria-label="5 out of 5 rating">
                  <span aria-hidden="true">★★★★★</span>
                  <span>5.0</span>
                </div>
                <p>{testimonial.text}</p>
                <div className="client-info">
                  <div className="client-details">
                    <strong>{testimonial.name}</strong>
                    <div>{testimonial.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
