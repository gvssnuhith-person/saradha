import React, { useState } from 'react';
import './Blessings.css';

const Blessings = () => {
  const [messages, setMessages] = useState([
    { name: "John Doe", text: "Wishing you both a lifetime of happiness!" },
    { name: "Sarah Smith", text: "Congratulations on your beautiful union!" }
  ]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      setMessages([...messages, { name, text }]);
      setName('');
      setText('');
    }
  };

  return (
    <section id="blessings" className="blessings-section container">
      <h2 className="section-title">Send Your Blessings 💌</h2>
      <div className="blessings-content">
        <form className="card blessings-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <textarea 
            placeholder="Your Blessing" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn-submit">Send Blessing</button>
        </form>
        
        <div className="messages-grid">
          {messages.map((m, i) => (
            <div key={i} className="card message-card">
              <strong>{m.name}</strong>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blessings;
