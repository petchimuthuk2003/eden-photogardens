export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Details</h3>
            <ul>
              <li><a href="mailto:eden@studio.com">eden@studio.com</a></li>
              <li><a href="tel:+919944553202">+91 99445 53202</a></li>
              <li><a href="tel:+917339335764">+91 73393 35764</a></li>
            </ul>
            <div className="social-links">
              <a href="#" className="social-link-icon instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link-icon facebook" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link-icon youtube" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
              <a href="https://wa.me/919944553202" className="social-link-icon whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Pages</h3>
            <ul>
              <li><a href="/photography">Photography</a></li>
              <li><a href="/printing-lab">Printing Lab</a></li>
              <li><a href="/custom-gifts">Custom Gifts</a></li>
              <li><a href="/camera-store">Camera Store</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Address</h3>
            <p>Eden Photo Garden</p>
            <p>Manza Photo Store</p>
            <p>No. 589/7A1A, Poo Market Road</p>
            <p>Tirunelveli Junction</p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.3273397980814!2d77.71025931478335!3d8.73145879372795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04115cb96f6421%3A0x4ebc08e362bf89cf!2sEden+Photo+Garden+-+Tirunelveli!5e0!3m2!1sen!2sin!4v1719463999999!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}