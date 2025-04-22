const express = require('express');
const router = express.Router();
const RentreeController = require('../controllers/RentreeController');

router.get("/", (req, res) => {

    RentreeController.getAllRentree(req, res); 
});

router.post("/", (req, res) => {
  RentreeController.addRentree(req, res);
});
router.get("/:id", (req, res) => {
  RentreeController.getRentreeById(req, res);
});
router.put("/:id", (req, res) => {
  RentreeController.updateRentree(req, res);
 });
 router.delete("/:id", (req, res) => {
  RentreeController.deleteRentree(req, res);
 });



module.exports = router;