import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a"
  ];

  return (
    <section id="gallery" className="gallery-section container">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Wedding ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
