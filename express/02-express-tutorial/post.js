const express = require('express');
const app = express();
const people=require('./routes/people')
const login= require('./routes/login')

// Middleware for static assets and URL-encoded data
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use('/api/people',people)
app.use('/login',login)

// Start the server
app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
