import './App.css'

function App() {
  return (
    <div className="wedding-container">
      <header className="hero">
        <div className="hero-overlay">
          <h1 className="title">A &amp; A</h1>
          <p className="subtitle">Are getting married</p>
          <div className="date-wrapper">
            <p className="date">November 15, 2026</p>
          </div>
        </div>
      </header>
      
      <section className="details">
        <h2>Join Us to Celebrate</h2>
        <div className="location">
          <h3>The Grand Estate</h3>
          <p>123 Love Lane, Romance City, RC 12345</p>
        </div>
        <p className="description">
          We can't wait to share our special day with you. Expect an evening full of love, laughter, and endless dancing. 
        </p>
        <button className="rsvp-btn">RSVP Now</button>
      </section>
    </div>
  )
}

export default App
