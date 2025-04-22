const ConcourService = require("../services/ConcourService");   

class ConcourController {

    async getAllConcour(req, res) {
    try {
      const concour = await ConcourService.getAllConcour();
      res.json(concour);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getConcourById(req, res) {
    try {
      const concour = await ConcourService.getConcourById(req.params.id);
      if (!concour) {
        return res.status(404).json({ error: "Concour non trouvée" });
      }
      res.json(concour);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Concour" });
    }
  }
  async addConcour(req, res) {
    try {
      const concour = await ConcourService.addConcour(req.body);
      res.status(201).json(concour);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateConcour(req, res) {
    try {
      const concour = await ConcourService.updateConcour(
        req.params.id,
        req.body
      );
      if (!concour) {
        return res.status(404).json({ error: "Concour non trouvée" });
      }
      res.json(concour);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Concour" });
    }
  }
  async deleteConcour(req, res) {
    try {
      const concour = await ConcourService.deleteConcour(req.params.id);
      if (!concour) {
        return res.status(404).json({ error: "Concour non trouvée" });
      }
      res.json(concour);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getConcourById(req, res) {
    try {
      const concour = await ConcourService.getConcourById(
        req.params.id
      );
      if (!concour) {
        return res.status(404).json({ error: "Concour non trouvée" });
      }
      res.json(concour);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Concour" });
    }
  }
}
module.exports = new ConcourController();
