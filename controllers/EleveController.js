const EleveService = require("../services/EleveService");   

class EleveController {

    async getAllEleve(req, res) {
    try {
      const eleve = await EleveService.getAllEleve();
      res.json(eleve);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getEleveById(req, res) {
    try {
      const eleve = await EleveService.getEleveById(req.params.id);
      if (!eleve) {
        return res.status(404).json({ error: "Eleve non trouvée" });
      }
      res.json(eleve);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Eleve" });
    }
  }
  async addEleve(req, res) {
    try {
      const eleve = await EleveService.addEleve(req.body);
      res.status(201).json(eleve);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateEleve(req, res) {
    try {
      const eleve = await EleveService.updateEleve(
        req.params.id,
        req.body
      );
      if (!eleve) {
        return res.status(404).json({ error: "Eleve non trouvée" });
      }
      res.json(eleve);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Eleve" });
    }
  }
  async deleteEleve(req, res) {
    try {
      const eleve = await EleveService.deleteEleve(req.params.id);
      if (!eleve) {
        return res.status(404).json({ error: "Eleve non trouvée" });
      }
      res.json(eleve);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getEleveById(req, res) {
    try {
      const eleve = await EleveService.getEleveById(
        req.params.id
      );
      if (!eleve) {
        return res.status(404).json({ error: "Eleve non trouvée" });
      }
      res.json(eleve);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Eleve" });
    }
  }
}
module.exports = new EleveController();
