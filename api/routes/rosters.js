const router = require("express").Router();
const Roster = require("../models/Roster");

//CREATE ROSTER
router.post("/", async (req, res) => {
  const newRoster = new Roster(req.body);
  try {
    const savedRoster = await newRoster.save();
    res.status(200).json(savedRoster);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE ROSTER
router.put("/:id", async (req, res) => {
  try {
    const roster = await Roster.findById(req.params.id);

    try {
      const updatedRoster = await Roster.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedRoster);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE ROSTER
router.delete("/:id", async (req, res) => {
  try {
    const roster = await Roster.findById(req.params.id);
    try {
      await roster.delete();
      res.status(200).json("Roster deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/sport=:sport", async (req, res) => {
  try {
    const roster = await Roster.find({ sport: { $regex: req.params.sport } });
    res.status(200).json(roster);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ROSTER
router.get("/id=:id", async (req, res) => {
  try {
    const roster = await Roster.findById(req.params.id);
    res.status(200).json(roster);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL ROSTERS
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let rosters;
    if (username) {
      rosters = await Roster.find({ author: username });
    } else {
      rosters = await Roster.find();
    }
    res.status(200).json(rosters);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
