const express = require('express');
const router = express.Router();
const { validateCreateFlight } = require('../../middlewares/index');

const city = require('./city/index');
const flights = require('./flights/index');
const airports = require('./airports/index');

router.use('/cities', city);
router.use('/flights', validateCreateFlight, flights);
router.use('/airports', airports);

module.exports = router;
