const router = require("express").Router();
const Ad = require("../models/Ad");

//get
router.get("/", async (req, res) => {
  try {
    let ad = await Ad.find();
    res.status(200).json(ad);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ARTICLE
router.get("/id=:id", async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    res.status(200).json(ad);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE stream
router.post("/", async (req, res) => {
  const newAd = new Ad(req.body);
  try {
    const savedAd = await newAd.save();
    res.status(200).json(savedAd);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);

    try {
      const updatedAd = await Ad.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedAd);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

router.delete("/:id", async (req, res) => {
  try {
    const ad = await Ad.findById(req.params.id);
    try {
      await ad.delete();
      res.status(200).json("ad deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
