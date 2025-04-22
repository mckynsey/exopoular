const Maisons = require("../models/maisons");

class MaisonService {
  async getAllMaison() {
    return await Maisons.findAll(); 
  }
  async addMaison(maison) {
    return await Maisons.create(maison);
  }
  async getMaisonById(id) {
    return await Maisons.findByPk(id);
  }
  async updateMaison(id, maison) {
    return await Maisons.update(maison, {
      where: {
        id_maison: id,
      },
    }); 
  }
  async deleteMaison(id) {
    return await Maisons.destroy({
      where: {
        id_maison: id,
      },
    }); 
  }
}
module.exports = new MaisonService();
