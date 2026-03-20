import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory storage for blessings
let blessings = [
  { name: "John Doe", text: "Wishing you both a lifetime of happiness!" },
  { name: "Sarah Smith", text: "Congratulations on your beautiful union!" }
];

app.get('/api/info', (req, res) => {
  res.json({
    couple: "Chinnu & Chinni",
    venue: "Tirupathi",
    date: "2026-12-31"
  });
});

app.get('/api/blessings', (req, res) => {
  res.json(blessings);
});

app.post('/api/blessings', (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) {
    return res.status(400).json({ error: 'Name and message are required' });
  }

  const newBlessing = { name, text, timestamp: new Date() };
  blessings.push(newBlessing);
  res.status(201).json({ message: 'Blessing received!', data: newBlessing });
});

export default app;
