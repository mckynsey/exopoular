const MaisonService = require("../services/MaisonService");   

class MaisonController {

    async getAllMaison(req, res) {
    try {
      const maison = await MaisonService.getAllMaison();
      res.json(maison);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getMaisonById(req, res) {
    try {
      const maison = await MaisonService.getMaisonById(req.params.id);
      if (!maison) {
        return res.status(404).json({ error: "Maison non trouvée" });
      }
      res.json(maison);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Maison" });
    }
  }
  async addMaison(req, res) {
    try {
      const maison = await MaisonService.addMaison(req.body);
      res.status(201).json(maison);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateMaison(req, res) {
    try {
      const maison = await MaisonService.updateMaison(
        req.params.id,
        req.body
      );
      if (!maison) {
        return res.status(404).json({ error: "Maison non trouvée" });
      }
      res.json(maison);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Maison" });
    }
  }
  async deleteMaison(req, res) {
    try {
      const maison = await MaisonService.deleteMaison(req.params.id);
      if (!maison) {
        return res.status(404).json({ error: "Maison non trouvée" });
      }
      res.json(maison);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getMaisonById(req, res) {
    try {
      const maison = await MaisonService.getMaisonById(
        req.params.id
      );
      if (!maison) {
        return res.status(404).json({ error: "Maison non trouvée" });
      }
      res.json(maison);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Maison" });
    }
  }
}
module.exports = new MaisonController();
