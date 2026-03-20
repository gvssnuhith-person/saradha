import React from 'react';
import './Venue.css';

const Venue = () => {
  return (
    <section id="venue" className="venue-section container">
      <h2 className="section-title">Wedding Venue</h2>
      <div className="card venue-card">
        <h3>Tirupathi, Andhra Pradesh</h3>
        <p>Join us as we celebrate our union in the spiritual city of Tirupathi.</p>
        <div className="map-container">
          <iframe 
            src="https://maps.google.com/maps?q=Tirupati&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Tirupati Venue Map"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '15px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Venue;
