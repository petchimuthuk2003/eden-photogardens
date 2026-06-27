"use client"

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function About() {
  const uniqueFeatures = [
    {
      id: 0,
      icon: "🎬",
      title: "Cinematic-Style Photography",
      description: "Delivering beautifully composed frames with modern color grading and aesthetics that tell your story like a movie.",
      defaultLikes: 124
    },
    {
      id: 1,
      icon: "👥",
      title: "Experienced Creative Team",
      description: "Photographers, editors, and stylists with strong technical & artistic expertise bringing years of professional experience.",
      defaultLikes: 98
    },
    {
      id: 2,
      icon: "🏛️",
      title: "Tamil Cultural Understanding",
      description: "Deep appreciation of regional traditions, rituals, and event sensitivities ensuring authentic cultural representation.",
      defaultLikes: 145
    },
    {
      id: 3,
      icon: "🔄",
      title: "End-to-End Service",
      description: "From initial planning to final delivery, every step is handled with professionalism and attention to detail.",
      defaultLikes: 87
    },
    {
      id: 4,
      icon: "📷",
      title: "Advanced Equipment",
      description: "State-of-the-art 4K cameras, drones, studio lights, and professional editing suites for exceptional quality.",
      defaultLikes: 112
    },
    {
      id: 5,
      icon: "💖",
      title: "Client-Centric Workflow",
      description: "Flexible scheduling, quick delivery, and personalized shoot planning tailored to your unique vision and needs.",
      defaultLikes: 136
    }
  ]

  const [likesState, setLikesState] = useState(
    uniqueFeatures.map(f => ({ id: f.id, count: f.defaultLikes, liked: false }))
  )

  const handleLike = (id: number) => {
    setLikesState(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          count: item.liked ? item.count - 1 : item.count + 1,
          liked: !item.liked
        }
      }
      return item
    }))
  }

  return (
    <>
      <Header />
      <main>
        <section className="about-hero">
          <h1>About Eden</h1>
        </section>
        <section className="who-we-are">
          <div className="container">
            <div className="who-we-are-content">
              <div className="who-we-are-image">
                <img src="/home-gallery-4.png" alt="Who We Are" />
              </div>
              <div className="who-we-are-text">
                <h2>Who We Are</h2>
                <p>Eden Photo Garden is your complete creative partner for photography, videography, printing, and personalized gifts. We offer comprehensive services from wedding photography to custom merchandise, all delivered with authenticity, quality, and artistic excellence.</p>
                <p><strong>Our Services:</strong> Photography (Wedding, Outdoor, Studio, Events) • Printing & Albums • Custom Gifts • Equipment Sales & Rental</p>
                <a href="/contact" className="book-session-btn" style={{ marginTop: '24px' }}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
        <section className="meet-team">
          <div className="container">
            <h2>Meet Our Team</h2>
            <p className="team-subtitle">The creative minds behind every perfect shot and unforgettable moment.</p>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image">
                  <img src="/about-team-1.jpg" alt="Team Member" />
                </div>
                <div className="team-info">
                  <h3>Sarah Johnson</h3>
                  <p className="team-role">Lead Photographer</p>
                  <p>With 8+ years of experience in wedding and portrait photography, Sarah brings artistic vision and technical expertise to every shoot.</p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/about-team-2.jpg" alt="Team Member" />
                </div>
                <div className="team-info">
                  <h3>Michael Chen</h3>
                  <p className="team-role">Videographer & Editor</p>
                  <p>Specializing in cinematic storytelling, Michael creates stunning video content that captures the essence of your special moments.</p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/about-team-3.webp" alt="Team Member" />
                </div>
                <div className="team-info">
                  <h3>Priya Sharma</h3>
                  <p className="team-role">Event Coordinator</p>
                  <p>Ensuring seamless execution of every project, Priya manages timelines and coordinates with clients for stress-free experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="what-makes-unique">
          <div className="container">
            <h2>What Makes Us Unique</h2>
            <p className="unique-subtitle">Discover the distinctive qualities that set our photography studio apart and make every moment unforgettable.</p>
            <div className="unique-grid">
              {uniqueFeatures.map(feature => {
                const state = likesState.find(s => s.id === feature.id) || { count: feature.defaultLikes, liked: false }
                return (
                  <div key={feature.id} className="unique-card">
                    <div className="unique-icon-container">
                      <span className="unique-icon-emoji">{feature.icon}</span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>

                    <div className="unique-card-footer">
                      <button 
                        className={`like-button ${state.liked ? 'liked' : ''}`}
                        onClick={() => handleLike(feature.id)}
                        aria-label="Like this quality"
                      >
                        {state.liked ? (
                          <svg className="heart-icon solid" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#e0245e" />
                          </svg>
                        ) : (
                          <svg className="heart-icon outline" viewBox="0 0 24 24" width="20" height="20">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="none" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        )}
                        <span className="like-label">{state.liked ? 'Liked' : 'Like'}</span>
                      </button>
                      <div className="like-counter">
                        <span className="like-count-number">{state.count}</span>
                        <span className="like-count-label"> likes</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}