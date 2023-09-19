// Configure environment variables
require('dotenv').config();

// Essential package imports
const bodyParser = require('body-parser');
const cors = require('cors');

// Express setup
const express = require('express');
const app = express();
const port = process.env.NODE_ENV === 'production'
  ? process.env.PORT
  : 5050;

// Express configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// TODO: Route imports

// ORM import
const { DatabaseWrapper } = require('./database/databaseWrapper.js')

// TODO: ORM config (ideally in separate file of some sort)
const db = new DatabaseWrapper('development');

// Middleware
// TODO: Update CORS config when necessary
app.use(cors());
app.use(bodyParser.json());

app.listen(port, (err) => {
  if (err) {
    console.error('Error in server configuration: ' + err);
  }
  console.log('App listening on port ' + port);
});