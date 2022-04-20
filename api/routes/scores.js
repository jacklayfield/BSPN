const router = require("express").Router();
const Score = require("../models/Score");

//CREATE SCORE
router.post("/", async (req, res) => {
  const newScore = new Score(req.body);
  try {
    const savedScore = await newScore.save();
    res.status(200).json(savedScore);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE SCORE
router.put("/:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);

    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE SCORE
router.delete("/:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    try {
      await score.delete();
      res.status(200).json("Score deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/sport=:sport", async (req, res) => {
  try {
    const score = await Score.find({ sport: { $regex: req.params.sport } });
    res.status(200).json(score);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET SCORE
router.get("/id=:id", async (req, res) => {
  try {
    const score = await Score.findById(req.params.id);
    res.status(200).json(score);
  } catch (error) {
    res.status(500).json(error);
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
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
