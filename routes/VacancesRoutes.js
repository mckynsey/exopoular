const express = require('express');
const router = express.Router();
const VacanceController = require('../controllers/VacanceController');

router.get("/", (req, res) => {

    VacanceController.getAllVacance(req, res); 
});

router.post("/", (req, res) => {
  VacanceController.addVacance(req, res);
});
router.get("/:id", (req, res) => {
  VacanceController.getVacanceById(req, res);
});
router.put("/:id", (req, res) => {
  VacanceController.updateVacance(req, res);
 });
 router.delete("/:id", (req, res) => {
  VacanceController.deleteVacance(req, res);
 });



module.exports = router;