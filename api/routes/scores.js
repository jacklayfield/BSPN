const router = require("express").Router();
const Score = require("../models/Score");

//CREATE SCORE
router.post("/", async (req, res) => {
  const newScore = new Score(req.body);
  try {
    const savedScore = await newScore.save();
    res.status(200).json(savedScore);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE SCORE
router.put("/:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE SCORE
router.delete("/:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sport=:sport", async (req, res) => {
    try {
      const score = await Score.find({"sport":{$regex: req.params.sport}});
      res.status(200).json(score);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET SCORE
router.get("/id=:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    res.status(200).json(score);
  } catch (err) {
    res.status(500).json(err);
  }
});



//GET ALL SCORES
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let scores;
    if (username) {
      scores = await Score.find({ author: username });
    } else {
      scores = await Score.find();
    }
    res.status(200).json(scores);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
