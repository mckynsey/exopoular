const ArticleService = require("../services/ArticleService");   

class ArticleController {

    async getAllArticle(req, res) {
    try {
      const article = await ArticleService.getAllArticle();
      res.json(article);
    } catch (error) {
      console.log(error); 
      console;
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
    }
  }
  async getArticleById(req, res) {
    try {
      const article = await ArticleService.getArticleById(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article non trouvée" });
      }
      res.json(article);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la article" });
    }
  }
  async addArticle(req, res) {
    try {
      const article = await ArticleService.addArticle(req.body);
      res.status(201).json(article);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la créateur de la formateur" });
    }
  }
  async updateArticle(req, res) {
    try {
      const article = await ArticleService.updateArticle(
        req.params.id,
        req.body
      );
      if (!article) {
        return res.status(404).json({ error: "Article non trouvée" });
      }
      res.json(article);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la mise à jour de la article" });
    }
  }
  async deleteArticle(req, res) {
    try {
      const article = await ArticleService.deleteArticle(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article non trouvée" });
      }
      res.json(article);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la suppression de la formateur" });
    }
  }
  async getArticleById(req, res) {
    try {
      const article = await ArticleService.getArticleById(
        req.params.id
      );
      if (!article) {
        return res.status(404).json({ error: "Article non trouvée" });
      }
      res.json(article);
    } catch (error) {
      console.log(error); 
      res.status(500); 
      res.json({ error: "Erreur lors de la récupération de la article" });
    }
  }
}
module.exports = new ArticleController();
