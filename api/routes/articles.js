const router = require("express").Router();
const User = require("../models/User");
const Article = require("../models/Article");

//CREATE ARTICLE
router.post("/", async (req, res) => {
  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE ARTICLE
router.put("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedArticle);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE ARTICLE
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    try {
      await article.delete();
      res.status(200).json("Article deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ARTICLE
router.get("/id=:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL ARTICLES
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let articles;
    if (username) {
      articles = await Article.find({ author: username });
    } else {
      articles = await Article.find();
    }
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/sport=:sport", async (req, res) => {
  try {
    const article = await Article.find({ sport: { $regex: req.params.sport } });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
