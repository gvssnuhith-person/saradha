import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wedding-site">
      {/* Decorative Border Overlay */}
      <div className="fixed-border top"></div>
      <div className="fixed-border bottom"></div>
      <div className="fixed-border left"></div>
      <div className="fixed-border right"></div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">C & C</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#story">Our Story</a>
          <a href="#events">Ceremonies</a>
          <a href="#rsvp">Attendance</a>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <p className="hero-subtitle">With Blessings of our Families</p>
          <h1 className="hero-title">Chinni <span className="amp">&</span> Chinnu</h1>
          <div className="hero-date">
            <span className="line"></span>
            <span className="date-text">November 15, 2026</span>
            <span className="line"></span>
          </div>
          <p className="hero-location">The Grand Royal Palace, Hyderabad</p>
        </div>
      </header>

      <section className="story" id="story">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-grid">
            <div className="story-img">
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop" alt="Traditional Couple" />
              <div className="img-frame"></div>
            </div>
            <div className="story-text">
              <h3 className="great-vibes">Two Souls, One Journey</h3>
              <p>Our story began with a simple meeting arranged by our families, but it quickly blossomed into a beautiful friendship and then a profound love. Between shared laughs and deep conversations, we found our perfect partner in each other.</p>
              <p>We are thrilled to embark on this lifelong adventure together and invite you to be part of our most precious celebration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="events" id="events">
        <div className="container">
          <h2 className="section-title light">The Ceremonies</h2>
          <div className="event-grid">
            <div className="event-card">
              <div className="event-icon">🌸</div>
              <h3>Haldi & Mehendi</h3>
              <p className="event-time">10:00 AM | Nov 14</p>
              <p className="event-desc">A morning of colors, turmeric, and joy.</p>
            </div>
            <div className="event-card">
              <div className="event-icon">🪔</div>
              <h3>Muhurtham</h3>
              <p className="event-time">11:30 AM | Nov 15</p>
              <p className="event-desc">The sacred union under the Vedic chants.</p>
            </div>
            <div className="event-card">
              <div className="event-icon">✨</div>
              <h3>Grand Reception</h3>
              <p className="event-time">07:00 PM | Nov 15</p>
              <p className="event-desc">An evening of music, dinner, and celebration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rsvp" id="rsvp">
        <div className="container narrow">
          <h2 className="section-title">Will You Join Us?</h2>
          <p className="rsvp-subtitle">Please confirm your attendance by Oct 1st</p>
          <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Your Full Name" required />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-row">
              <select required>
                <option value="">Will you be attending?</option>
                <option value="yes">Accepts with Pleasure</option>
                <option value="no">Declines with Regret</option>
              </select>
            </div>
            <div className="form-row">
              <textarea placeholder="Any dietary preferences or wishes..."></textarea>
            </div>
            <button type="submit" className="btn-premium">Confirm Attendance</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-names great-vibes">Chinni & Chinnu</p>
        <p className="footer-thanks">Thank you for your love and blessings.</p>
        <div className="footer-pattern"></div>
      </footer>
    </div>
  );
}

export default App;
