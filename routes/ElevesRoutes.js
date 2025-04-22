const express = require('express');
const router = express.Router();
const EleveController = require('../controllers/EleveController');

router.get("/", (req, res) => {

    EleveController.getAllEleve(req, res); 
});

router.post("/", (req, res) => {
  EleveController.addEleve(req, res);
});
router.get("/:id", (req, res) => {
  EleveController.getEleveById(req, res);
});
router.put("/:id", (req, res) => {
  EleveController.updateEleve(req, res);
 });
 router.delete("/:id", (req, res) => {
  EleveController.deleteEleve(req, res);
 });



module.exports = router;