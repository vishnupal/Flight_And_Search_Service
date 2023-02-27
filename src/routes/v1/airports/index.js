const express = require('express');
const AirportController = require('../../../controllers/airport.controller');

const router = express.Router();

router.post('/', AirportController.create);
// router.delete('/:id', CityController.destroy);
// router.get('/:id', CityController.get);
// router.get('/', CityController.getAll);
// router.patch('/:id', CityController.update);

module.exports = router;
