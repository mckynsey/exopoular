const Articles = require("../models/articles");

class ArticleService {
  async getAllArticle() {
    return await Articles.findAll(); 
  }
  async addArticle(article) {
    return await Articles.create(article);
  }
  async getArticleById(id) {
    return await Articles.findByPk(id);
  }
  async updateArticle(id, article) {
    return await Articles.update(article, {
      where: {
        id_article: id,
      },
    }); 
  }
  async deleteArticle(id) {
    return await Articles.destroy({
      where: {
        id_article: id,
      },
    }); 
  }
}
module.exports = new ArticleService();
