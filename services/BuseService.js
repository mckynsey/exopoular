const Buses = require("../models/buses");

class BuseService {
  async getAllBuse() {
    return await Buses.findAll(); 
  }
  async addBuse(buse) {
    return await Buses.create(buse);
  }
  async getBuseById(id) {
    return await Buses.findByPk(id);
  }
  async updateBuse(id, buse) {
    return await Buses.update(buse, {
      where: {
        id_buse: id,
      },
    }); 
  }
  async deleteBuse(id) {
    return await Buses.destroy({
      where: {
        id_buse: id,
      },
    }); 
  }
}
module.exports = new BuseService();
