const Rentrees = require("../models/rentree");

class RentreeService {
  async getAllRentree() {
    return await Rentrees.findAll(); 
  }
  async addRentree(rentree) {
    return await Rentrees.create(rentree);
  }
  async getRentreeById(id) {
    return await Rentrees.findByPk(id);
  }
  async updateRentree(id, rentree) {
    return await Rentrees.update(rentree, {
      where: {
        id_rentree: id,
      },
    }); 
  }
  async deleteRentree(id) {
    return await Rentrees.destroy({
      where: {
        id_rentree: id,
      },
    }); 
  }
}
module.exports = new RentreeService();
