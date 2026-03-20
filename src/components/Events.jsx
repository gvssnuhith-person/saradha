import React from 'react';
import './Events.css';

const events = [
  { title: "Engagement", icon: "💍", desc: "A promise of forever." },
  { title: "Haldi", icon: "🌼", desc: "Applying the glow of love." },
  { title: "Sangeet", icon: "🎶", desc: "Dancing the night away." },
  { title: "Wedding Ceremony", icon: "🔥", desc: "Tying the knot in Tirupathi." },
  { title: "Reception", icon: "🎉", desc: "Celebrating our new journey." }
];

const Events = () => {
  return (
    <section id="events" className="events-section container">
      <h2 className="section-title">Wedding Events</h2>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="card event-card">
            <div className="event-icon">{event.icon}</div>
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
