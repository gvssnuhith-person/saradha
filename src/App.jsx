import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import Blessings from './components/Blessings';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [showMusicBtn, setShowMusicBtn] = useState(true);

  return (
    <div className="App">
      <nav className="main-nav">
        <div className="container nav-content">
          <a href="#home">Home</a>
          <a href="#story">Story</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#venue">Venue</a>
          <a href="#blessings">Blessings</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <OurStory />
        <Events />
        <Gallery />
        <Venue />
        <Blessings />
        <Contact />
      </main>

      <footer className="footer">
        <p>Thank you for being part of our special day ❤️</p>
      </footer>
      
      {/* Background music can be added here or in a separate component */}
    </div>
  );
}

export default App;
