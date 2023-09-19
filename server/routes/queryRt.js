// External imports
const express = require('express');
const router = express.Router();

// Controller imports
const { createQuery } = require('../controllers/queryCtrl.js');

router.route('/create_query')
  .post(createQuery);

module.exports = router;