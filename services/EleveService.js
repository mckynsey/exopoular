const Eleves = require("../models/eleves");

class EleveService {
  async getAllEleve() {
    return await Eleves.findAll(); 
  }
  async addEleve(eleve) {
    return await Eleves.create(eleve);
  }
  async getEleveById(id) {
    return await Eleves.findByPk(id);
  }
  async updateEleve(id, eleve) {
    return await Eleves.update(eleve, {
      where: {
        id_eleve: id,
      },
    }); 
  }
  async deleteEleve(id) {
    return await Eleves.destroy({
      where: {
        id_eleve: id,
      },
    }); 
  }
}
module.exports = new EleveService();
