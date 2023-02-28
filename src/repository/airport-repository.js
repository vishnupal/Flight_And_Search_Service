const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
  // we want customize method then override method here
  // like
  // async getAll(filter) {
  //   try {
  //     const result = await this.model.findAll({
  //       where: {
  //         filter,
  //       },
  //     });
  //   } catch (error) {}
  // }
}

module.exports = AirportRepository;
