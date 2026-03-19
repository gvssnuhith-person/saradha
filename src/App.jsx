import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wedding-app">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">A &amp; A</div>
        <ul className="nav-links">
          <li><a href="#story">Our Story</a></li>
          <li><a href="#event">The Wedding</a></li>
          <li><a href="#travel">Travel</a></li>
          <li><a href="#rsvp">RSVP</a></li>
        </ul>
      </nav>

      <header className="hero" id="home">
        <div className="hero-overlay">
          <p className="pre-title">We are getting married</p>
          <h1 className="title">Alice &amp; Adam</h1>
          <div className="date-box">
            <span className="month">November</span>
            <span className="day">15</span>
            <span className="year">2026</span>
          </div>
          <p className="hero-location">The Grand Estate • New York, NY</p>
        </div>
      </header>

      <section className="section story-section" id="story">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1000&auto=format&fit=crop" alt="The Couple" />
            </div>
            <div className="story-text">
              <h3>How It All Began</h3>
              <p>It was a rainy Tuesday afternoon when our paths first crossed at a small, cozy coffee shop downtown. From a simple "Is this seat taken?" to endless conversations that lingered long after our coffees went cold, we knew early on that what we had was something truly special.</p>
              <br/>
              <p>Years of adventures, travels, and countless beautiful memories later, Adam finally dropped to one knee on our favorite cliffside overlooking the ocean. We can't wait to begin this next magical chapter of our lives, surrounded by the people we love most in the world!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section event-section" id="event">
        <div className="container text-center">
          <h2 className="section-title">The Wedding Day</h2>
          <p className="section-subtitle">Join us for an evening of love, laughter, and dining.</p>
          
          <div className="event-cards">
            <div className="card">
              <div className="card-icon">💍</div>
              <h3>The Ceremony</h3>
              <p className="time">4:00 PM</p>
              <p className="venue">The Grand Gardens</p>
              <p className="address">123 Love Lane, Romance City, NY</p>
            </div>
            <div className="card">
              <div className="card-icon">🥂</div>
              <h3>Cocktail Hour</h3>
              <p className="time">5:30 PM</p>
              <p className="venue">The Estate Terrace</p>
              <p className="address">Drinks &amp; Hors d'oeuvres</p>
            </div>
            <div className="card">
              <div className="card-icon">🍽️</div>
              <h3>Reception</h3>
              <p className="time">7:00 PM - Midnight</p>
              <p className="venue">The Grand Ballroom</p>
              <p className="address">Dinner, Toasts &amp; Dancing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section travel-section" id="travel">
        <div className="container">
          <div className="travel-grid">
            <div className="travel-info">
              <h2 className="section-title">Travel &amp; Stay</h2>
              <h3>Accommodations</h3>
              <p>We have reserved a block of rooms for our guests at <strong>The Plaza Hotel</strong>. Please mention the "Alice &amp; Adam Wedding" when booking to receive the special group rate.</p>
              <br/>
              <h3>Transportation</h3>
              <p>A shuttle service will be provided between The Plaza Hotel and the wedding venue. Shuttles depart the hotel at 3:15 PM and will return every hour starting at 9:00 PM.</p>
            </div>
            <div className="travel-image">
              <img src="https://images.unsplash.com/photo-1542314831-c6a4203251ee?q=80&w=1000&auto=format&fit=crop" alt="Hotel Architecture" />
            </div>
          </div>
        </div>
      </section>

      <section className="section rsvp-section" id="rsvp">
        <div className="container text-center">
          <h2 className="section-title">RSVP</h2>
          <p className="section-subtitle">Kindly reply by October 1st, 2026</p>
          <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Full Name(s)" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <select required defaultValue="">
                <option value="" disabled>Will you be attending?</option>
                <option value="yes">Joyfully Accepts</option>
                <option value="no">Regretfully Declines</option>
              </select>
            </div>
            <div className="form-group">
              <input type="number" placeholder="Number of Guests" min="1" max="5" />
            </div>
            <div className="form-group">
              <textarea placeholder="Dietary Restrictions or Special Notes"></textarea>
            </div>
            <button type="submit" className="btn-primary">Send RSVP</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <h2>A &amp; A</h2>
        <p>11 . 15 . 2026</p>
        <p className="built-with">Built with ❤️ for our special day</p>
      </footer>
    </div>
  );
}

export default App;
