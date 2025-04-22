const RentreeService = require("../services/RentreeService");   

class RentreeController {

    async getAllRentree(req, res) {
    try {
      const rentree = await RentreeService.getAllRentree();
      res.json(rentree);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getRentreeById(req, res) {
    try {
      const rentree = await RentreeService.getRentreeById(req.params.id);
      if (!rentree) {
        return res.status(404).json({ error: "Rentree non trouvée" });
      }
      res.json(rentree);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Rentree" });
    }
  }
  async addRentree(req, res) {
    try {
      const rentree = await RentreeService.addRentree(req.body);
      res.status(201).json(rentree);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateRentree(req, res) {
    try {
      const rentree = await RentreeService.updateRentree(
        req.params.id,
        req.body
      );
      if (!rentree) {
        return res.status(404).json({ error: "Rentree non trouvée" });
      }
      res.json(rentree);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Rentree" });
    }
  }
  async deleteRentree(req, res) {
    try {
      const rentree = await RentreeService.deleteRentree(req.params.id);
      if (!rentree) {
        return res.status(404).json({ error: "Rentree non trouvée" });
      }
      res.json(rentree);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getRentreeById(req, res) {
    try {
      const rentree = await RentreeService.getRentreeById(
        req.params.id
      );
      if (!rentree) {
        return res.status(404).json({ error: "Rentree non trouvée" });
      }
      res.json(rentree);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Rentree" });
    }
  }
}
module.exports = new RentreeController();
