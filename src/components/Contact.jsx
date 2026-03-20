import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Contact</h2>
      <div className="card contact-card">
        <div className="contact-item">
          <strong>Family Contact</strong>
          <p>📞 +91 XXXXX XXXXX</p>
        </div>
        <div className="contact-item">
          <strong>Email</strong>
          <p>✉️ wedding@email.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
