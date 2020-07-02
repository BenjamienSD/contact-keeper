// server.js is the entrypoint to the backend

// basic express server
// bring in express
const express = require('express');
const connectDB = require('./config/db');

// initialize express into a variable called 'app'
const app = express();

// connect database
connectDB();

// add endpoint route
app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the contact keeper api' });
});

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// during development port 5000 is used
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// using 'npm run server' to use nodemon
