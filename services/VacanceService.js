const Vacances = require("../models/vacances");

class VacanceService {
  async getAllVacance() {
    return await Vacances.findAll(); 
  }
  async addVacance(vacance) {
    return await Vacances.create(vacance);
  }
  async getVacanceById(id) {
    return await Vacances.findByPk(id);
  }
  async updateVacance(id, vacance) {
    return await Vacances.update(vacance, {
      where: {
        id_vacance: id,
      },
    }); 
  }
  async deleteVacance(id) {
    return await Vacances.destroy({
      where: {
        id_vacance: id,
      },
    }); 
  }
}
module.exports = new VacanceService();
