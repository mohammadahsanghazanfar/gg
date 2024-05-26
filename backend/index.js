const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Allow port to be set via environment variable or default to 5000
const db = require('./db');
const routes = require('./router/routes');

// Connect to the database
db()
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1); // Exit the process if unable to connect to the database
  });

// Middleware for CORS handling and JSON parsing
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/', routes); // Mount additional routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
