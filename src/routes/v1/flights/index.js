const express = require('express');
const FlightController = require('../../../controllers/flight-controller');

const router = express.Router();

router.post('/', FlightController.create);
// router.delete('/:id', CityController.destroy);
// router.get('/:id', CityController.get);
router.get('/', FlightController.getAll);
// router.patch('/:id', CityController.update);

module.exports = router;
