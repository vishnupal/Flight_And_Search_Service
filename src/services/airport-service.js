const { AirportRepository } = require('../repository/index');
const CrudService = require('./crud-service');

class AirportService extends CrudService {
  constructor() {
    const airplaneRepository = new AirportRepository();
    super(airplaneRepository);
  }
}

module.exports = AirportService;
