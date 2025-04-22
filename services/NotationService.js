const Notations = require("../models/notations");

class NotationService {
  async getAllNotation() {
    return await Notations.findAll(); 
  }
  async addNotation(notation) {
    return await Notations.create(notation);
  }
  async getNotationById(id) {
    return await Notations.findByPk(id);
  }
  async updateNotation(id, notation) {
    return await Notations.update(notation, {
      where: {
        id_notation: id,
      },
    }); 
  }
  async deleteNotation(id) {
    return await Notations.destroy({
      where: {
        id_notation: id,
      },
    }); 
  }
}
module.exports = new NotationService();
