const { City } = require('../models/index');

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    // data -> {name:"Prayagraj"}
    try {
      // this below code also work but it doesn't return updated object
      // if we use with pgsql then below code also return updated object but need use retuning: true after where
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      // for getting data in mysql we use below code
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log('Something went wrong in the repository layer');
      throw { error };
    }
  }
}

module.exports = CityRepository;
