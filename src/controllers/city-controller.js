const { CityService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const cityService = new CityService();
const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: city,
      success: true,
      message: 'City created successfully',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a city',
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: 'Successfully deleted a city',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to delete a city',
      err: error,
    });
  }
};
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: 'Successfully fetched a city',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to get a city',
      err: error,
    });
  }
};

// /city/:id   -> req.body
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: city,
      success: true,
      message: 'Successfully fetched a city',
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update a city',
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    console.log(req.query);
    const cities = await cityService.getAllCities(req.query);

    return res.status(SuccessCodes.OK).json({
      data: cities,
      success: true,
      message: 'Successfully fetched all cities',
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the cities',
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
