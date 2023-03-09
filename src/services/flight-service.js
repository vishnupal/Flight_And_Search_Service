const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: 'Arrival time cannot be less than departure time ' };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );

      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log('Something went wrong  at  service layer');
      throw { error };
    }
  }
  async getAllFlights(filter) {
    try {
      const flights = await this.flightRepository.getAllFlights(filter);
      return flights;
    } catch (error) {
      console.log('Something went wrong  at  service layer');
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch {
      console.log('Something went wrong  at  service layer');
      throw { error };
    }
  }

  async update(flightId, data) {
    try {
      const flight = await this.flightRepository.update(flightId,data);
      return flight;
    } catch {
      console.log('Something went wrong  at  service layer');
      throw { error };
    }
  }
}
module.exports = FlightService;
