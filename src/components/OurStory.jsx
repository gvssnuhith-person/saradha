import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section id="story" className="story-section container">
      <h2 className="section-title">Our Story</h2>
      <div className="story-timeline">
        <div className="card timeline-card">
          <div className="story-icon">💫</div>
          <h3>First Meeting</h3>
          <p>Where it all began. A moment that changed our lives forever.</p>
        </div>
        <div className="card timeline-card">
          <div className="story-icon">❤️</div>
          <h3>Fell in Love</h3>
          <p>Through laughter and tears, our bond grew stronger every day.</p>
        </div>
        <div className="card timeline-card">
          <div className="story-icon">💍</div>
          <h3>Forever Begins</h3>
          <p>The day we decided to walk hand in hand for the rest of our lives.</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
