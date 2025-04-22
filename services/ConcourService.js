const Concours = require("../models/concours");

class ConcourService {
  async getAllConcour() {
    return await Concours.findAll(); 
  }
  async addConcour(concour) {
    return await Concours.create(concour);
  }
  async getConcourById(id) {
    return await Concours.findByPk(id);
  }
  async updateConcour(id, concour) {
    return await Concours.update(concour, {
      where: {
        id_concour: id,
      },
    }); 
  }
  async deleteConcour(id) {
    return await Concours.destroy({
      where: {
        id_concour: id,
      },
    }); 
  }
}
module.exports = new ConcourService();
