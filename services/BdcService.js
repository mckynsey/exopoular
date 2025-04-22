const Bdcs = require("../models/bdcs");

class BdcService {
  async getAllBdc() {
    return await Bdcs.findAll(); 
  }
  async addBdc(bdc) {
    return await Bdcs.create(bdc);
  }
  async getBdcById(id) {
    return await Bdcs.findByPk(id);
  }
  async updateBdc(id, bdc) {
    return await Bdcs.update(bdc, {
      where: {
        id_bdc: id,
      },
    }); 
  }
  async deleteBdc(id) {
    return await Bdcs.destroy({
      where: {
        id_bdc: id,
      },
    }); 
  }
}
module.exports = new BdcService();
