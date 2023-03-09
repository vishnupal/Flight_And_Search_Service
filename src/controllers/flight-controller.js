const { FlightService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      //don't send unwanted property to Service
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: 'Flight created successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a Flight',
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlights(req.query);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: 'Flights fetched successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to Fetched  Flights',
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: 'Flight fetched successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to Fetched  Flight',
      err: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const flight = await flightService.update(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: 'Flight updated successfully',
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update  Flight',
      err: error,
    });
  }
};
module.exports = {
  create,
  getAll,
  get,
  update,
};
