
const express = require('express');
const app = express();
const linkRoutes = require('./routes/links');
const userRoutes = require('./routes/users');
const db = require('./config/database');

app.use(express.json());


// link endpoints prefixes
app.use('/api/links', linkRoutes);
app.use('/api/users', userRoutes);


// db from .../database,  server set to run at port 8080
db.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
  
  