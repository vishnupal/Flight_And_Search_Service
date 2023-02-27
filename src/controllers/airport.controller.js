const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      err: {},
      message: 'Airport created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: 'Cannot create a new Airport',
    });
  }
};
const getAll = async (req, res) => {
  try {
    const airport = await airportService.getAll();
    return res.status(200).json({
      data: airport,
      success: true,
      err: {},
      message: 'Airports fetched successfully',
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: 'Not able to fetched all airport',
    });
  }
};
const get = async (req, res) => {
  try {
    const airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      err: {},
      message: 'Airport fetched successfully',
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: 'Not able to fetched airport',
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
};
