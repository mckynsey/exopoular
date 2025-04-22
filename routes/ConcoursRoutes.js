const express = require('express');
const router = express.Router();
const ConcourController = require('../controllers/ConcourController');

router.get("/", (req, res) => {

    ConcourController.getAllConcour(req, res); 
});

router.post("/", (req, res) => {
  ConcourController.addConcour(req, res);
});
router.get("/:id", (req, res) => {
  ConcourController.getConcourById(req, res);
});
router.put("/:id", (req, res) => {
  ConcourController.updateConcour(req, res);
 });
 router.delete("/:id", (req, res) => {
  ConcourController.deleteConcour(req, res);
 });



module.exports = router;