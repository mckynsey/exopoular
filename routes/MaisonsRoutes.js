const express = require('express');
const router = express.Router();
const MaisonController = require('../controllers/MaisonController');

router.get("/", (req, res) => {

    MaisonController.getAllMaison(req, res); 
});

router.post("/", (req, res) => {
  MaisonController.addMaison(req, res);
});
router.get("/:id", (req, res) => {
  MaisonController.getMaisonById(req, res);
});
router.put("/:id", (req, res) => {
  MaisonController.updateMaison(req, res);
 });
 router.delete("/:id", (req, res) => {
  MaisonController.deleteMaison(req, res);
 });



module.exports = router;