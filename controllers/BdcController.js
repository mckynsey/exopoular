const BdcService = require("../services/BdcService");   

class BdcController {

    async getAllBdc(req, res) {
    try {
      const bdc = await BdcService.getAllBdc();
      res.json(bdc);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getBdcById(req, res) {
    try {
      const bdc = await BdcService.getBdcById(req.params.id);
      if (!bdc) {
        return res.status(404).json({ error: "Bdc non trouvée" });
      }
      res.json(bdc);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Bdc" });
    }
  }
  async addBdc(req, res) {
    try {
      const bdc = await BdcService.addBdc(req.body);
      res.status(201).json(bdc);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateBdc(req, res) {
    try {
      const bdc = await BdcService.updateBdc(
        req.params.id,
        req.body
      );
      if (!bdc) {
        return res.status(404).json({ error: "Bdc non trouvée" });
      }
      res.json(bdc);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Bdc" });
    }
  }
  async deleteBdc(req, res) {
    try {
      const bdc = await BdcService.deleteBdc(req.params.id);
      if (!bdc) {
        return res.status(404).json({ error: "Bdc non trouvée" });
      }
      res.json(bdc);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getBdcById(req, res) {
    try {
      const bdc = await BdcService.getBdcById(
        req.params.id
      );
      if (!bdc) {
        return res.status(404).json({ error: "Bdc non trouvée" });
      }
      res.json(bdc);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Bdc" });
    }
  }
}
module.exports = new BdcController();
