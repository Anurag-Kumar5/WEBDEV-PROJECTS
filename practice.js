// practice.js

//  Importing required modules
const express = require('express');
const path = require('path');

//  Creating the express app
const app = express();

//  Middlewares to handle form and JSON data
app.use(express.urlencoded({ extended: true })); // For form data (x-www-form-urlencoded)
app.use(express.json()); // For JSON data from Postman

//  Serving static files from 'public' folder
app.use(express.static('public')); // Any file in public/ can be accessed via browser

//  Basic GET route for homepage
app.get('/', (req, res) => {
  res.send('Welcome to Express.js Practice App!');
});

//  GET route with route parameter (dynamic path)
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Extracting ID from URL
  res.send(`User ID from URL is: ${userId}`);
});

//  GET route with query parameter (e.g., /search?term=express)
app.get('/search', (req, res) => {
  const term = req.query.term;
  res.send(`You searched for: ${term}`);
});

//  Sending an HTML file as response
app.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serving index.html
});

// POST route for handling form submissions
app.post('/submit-form', (req, res) => {
  const name = req.body.username; // Extracted from HTML form input
  res.send(`Form submitted by ${name}`);
});

//  POST route for handling JSON data (e.g., from Postman)
app.post('/api/data', (req, res) => {
  const jsonData = req.body; // Extracting JSON from request
  console.log(jsonData);     // Logging on terminal
  res.json({
    message: "JSON data received successfully!",
    yourData: jsonData
  });
});

//  Starting the server on port 3000
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
