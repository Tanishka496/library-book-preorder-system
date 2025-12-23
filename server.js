const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// In-memory demo 'database'
let books = [
  {id:1, name:'DSA', author:'Cormen', status:'Available'},
  {id:2, name:'DBMS', author:'Henry Korth', status:'Issued'},
  {id:3, name:'Computer Networks', author:'Tanenbaum', status:'Available'},
  {id:4, name:'Java Programming', author:'Herbert', status:'Available'},
  {id:5, name:'AI', author:'Russell', status:'Issued'}
];

// GET /api/books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// POST /api/reserve { id }
app.post('/api/reserve', (req, res) => {
  const { id } = req.body;
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });
  if (books[idx].status !== 'Available') return res.status(400).json({ error: 'Not available' });

  books[idx].status = 'Reserved';
  return res.json(books);
});

app.listen(port, () => console.log(`Demo API running on http://localhost:${port}`));
