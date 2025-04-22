const NotationService = require("../services/NotationService");   

class NotationController {

    async getAllNotation(req, res) {
    try {
      const notation = await NotationService.getAllNotation();
      res.json(notation);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getNotationById(req, res) {
    try {
      const notation = await NotationService.getNotationById(req.params.id);
      if (!notation) {
        return res.status(404).json({ error: "Notation non trouvée" });
      }
      res.json(notation);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Notation" });
    }
  }
  async addNotation(req, res) {
    try {
      const notation = await NotationService.addNotation(req.body);
      res.status(201).json(notation);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateNotation(req, res) {
    try {
      const notation = await NotationService.updateNotation(
        req.params.id,
        req.body
      );
      if (!notation) {
        return res.status(404).json({ error: "Notation non trouvée" });
      }
      res.json(notation);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Notation" });
    }
  }
  async deleteNotation(req, res) {
    try {
      const notation = await NotationService.deleteNotation(req.params.id);
      if (!notation) {
        return res.status(404).json({ error: "Notation non trouvée" });
      }
      res.json(notation);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getNotationById(req, res) {
    try {
      const notation = await NotationService.getNotationById(
        req.params.id
      );
      if (!notation) {
        return res.status(404).json({ error: "Notation non trouvée" });
      }
      res.json(notation);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Notation" });
    }
  }
}
module.exports = new NotationController();
