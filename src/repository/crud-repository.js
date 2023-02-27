class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log('Something gone wrong in crud repo');
    }
  }
  async get(modelId) {
    try {
      const result = await this.model.findByPk(modelId);
      return result;
    } catch (error) {
      console.log('Something gone wrong in crud repo');
    }
  }
  async delete(modelId) {
    try {
      await this.model.destroy({
        where: {
          id: modelId,
        },
      });
      return true;
    } catch (error) {
      console.log('Something gone wrong in crud repo');
    }
  }
  async update(modelId, data) {
    try {
      const result = await this.model.update(data, {
        where: {
          id: modelId,
        },
      });
      return result;
    } catch (error) {
      console.log('Something gone wrong in crud repo');
    }
  }
  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log('Something gone wrong in crud repo');
    }
  }
}

module.exports = CrudRepository;
