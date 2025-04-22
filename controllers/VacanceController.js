const VacanceService = require("../services/VacanceService");   

class VacanceController {

    async getAllVacance(req, res) {
    try {
      const vacance = await VacanceService.getAllVacance();
      res.json(vacance);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getVacanceById(req, res) {
    try {
      const vacance = await VacanceService.getVacanceById(req.params.id);
      if (!vacance) {
        return res.status(404).json({ error: "Vacance non trouvée" });
      }
      res.json(vacance);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Vacance" });
    }
  }
  async addVacance(req, res) {
    try {
      const vacance = await VacanceService.addVacance(req.body);
      res.status(201).json(vacance);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateVacance(req, res) {
    try {
      const vacance = await VacanceService.updateVacance(
        req.params.id,
        req.body
      );
      if (!vacance) {
        return res.status(404).json({ error: "Vacance non trouvée" });
      }
      res.json(vacance);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la Vacance" });
    }
  }
  async deleteVacance(req, res) {
    try {
      const vacance = await VacanceService.deleteVacance(req.params.id);
      if (!vacance) {
        return res.status(404).json({ error: "Vacance non trouvée" });
      }
      res.json(vacance);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getVacanceById(req, res) {
    try {
      const vacance = await VacanceService.getVacanceById(
        req.params.id
      );
      if (!vacance) {
        return res.status(404).json({ error: "Vacance non trouvée" });
      }
      res.json(vacance);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la Vacance" });
    }
  }
}
module.exports = new VacanceController();
