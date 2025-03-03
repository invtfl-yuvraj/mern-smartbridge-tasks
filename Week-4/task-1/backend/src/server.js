const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Yuvraj's Website",
        
     });
  });

// Welcome route
app.get('/welcome', (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory users data
let users = [
  { id: 1, name: 'User 1', email: 'user1@gmail.com' },
  { id: 2, name: 'User 2', email: 'user2@gmail.com '}
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST create a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Generate a new ID
  const id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  
  const newUser = { id, name, email };
  users.push(newUser);
  
  res.status(201).json(newUser);
});

// PUT update a user
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  users[userIndex] = { id, name, email };
  
  res.json(users[userIndex]);
});

// DELETE a user
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  const deletedUser = users[userIndex];
  users = users.filter(user => user.id !== id);
  
  res.json(deletedUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});