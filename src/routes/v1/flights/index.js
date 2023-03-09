const express = require('express');
const FlightController = require('../../../controllers/flight-controller');
const { validateCreateFlight } = require('../../../middlewares/index');

const router = express.Router();

router.post('/', validateCreateFlight, FlightController.create);
// router.delete('/:id', CityController.destroy);
// router.get('/:id', CityController.get);
router.get('/', FlightController.getAll);
router.get('/:id', FlightController.get);
router.patch('/:id', FlightController.update);
// router.patch('/:id', CityController.update);

module.exports = router;
