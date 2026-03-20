import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date("2026-12-31T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const gap = weddingDate - now;

      if (gap > 0) {
        setTimeLeft({
          days: Math.floor(gap / (1000 * 60 * 60 * 24)),
          hours: Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((gap % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-names">Chinnu <span className="heart">❤️</span> Chinni</h1>
        <p className="hero-subtitle">Together with love, we begin our forever</p>
        <div className="location-tag">📍 Tirupathi</div>
        
        <div className="countdown-container">
          <div className="countdown-item">
            <span className="count">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="count">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="count">{timeLeft.minutes}</span>
            <span className="label">Mins</span>
          </div>
          <div className="countdown-item">
            <span className="count">{timeLeft.seconds}</span>
            <span className="label">Secs</span>
          </div>
        </div>
        
        <a href="#blessings" className="btn-rsvp">Send Blessings</a>
      </div>
    </section>
  );
};

export default Hero;
