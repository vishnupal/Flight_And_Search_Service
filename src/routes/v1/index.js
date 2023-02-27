const express = require('express');
const router = express.Router();

const city = require('./city/index');
const flights = require('./flights/index');

router.use('/cities', city);
router.use('/flights', flights);

module.exports = router;
