const BuseService = require("../services/BuseService");   

class BuseController {

    async getAllBuse(req, res) {
    try {
      const buse = await BuseService.getAllBuse();
      res.json(buse);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getBuseById(req, res) {
    try {
      const buse = await BuseService.getBuseById(req.params.id);
      if (!buse) {
        return res.status(404).json({ error: "Buse non trouvée" });
      }
      res.json(buse);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Buse" });
    }
  }
  async addBuse(req, res) {
    try {
      const buse = await BuseService.addBuse(req.body);
      res.status(201).json(buse);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateBuse(req, res) {
    try {
      const buse = await BuseService.updateBuse(
        req.params.id,
        req.body
      );
      if (!buse) {
        return res.status(404).json({ error: "Buse non trouvée" });
      }
      res.json(buse);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Buse" });
    }
  }
  async deleteBuse(req, res) {
    try {
      const buse = await BuseService.deleteBuse(req.params.id);
      if (!buse) {
        return res.status(404).json({ error: "Buse non trouvée" });
      }
      res.json(buse);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getBuseById(req, res) {
    try {
      const buse = await BuseService.getBuseById(
        req.params.id
      );
      if (!buse) {
        return res.status(404).json({ error: "Buse non trouvée" });
      }
      res.json(buse);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Buse" });
    }
  }
}
module.exports = new BuseController();
