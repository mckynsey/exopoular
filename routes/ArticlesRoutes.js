const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/ArticleController');

router.get("/", (req, res) => {

    ArticleController.getAllArticle(req, res); 
});

router.post("/", (req, res) => {
  ArticleController.addArticle(req, res);
});
router.get("/:id", (req, res) => {
  ArticleController.getArticleById(req, res);
});
router.put("/:id", (req, res) => {
  ArticleController.updateArticle(req, res);
 });
 router.delete("/:id", (req, res) => {
  ArticleController.deleteArticle(req, res);
 });



module.exports = router;