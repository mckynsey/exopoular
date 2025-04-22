const express = require('express');
const router = express.Router();
const BdcController = require('../controllers/BdcController');

router.get("/", (req, res) => {

    BdcController.getAllBdc(req, res); 
});

router.post("/", (req, res) => {
  BdcController.addBdc(req, res);
});
router.get("/:id", (req, res) => {
  BdcController.getBdcById(req, res);
});
router.put("/:id", (req, res) => {
  BdcController.updateBdc(req, res);
 });
 router.delete("/:id", (req, res) => {
  BdcController.deleteBdc(req, res);
 });



module.exports = router;