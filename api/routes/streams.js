const router = require("express").Router();
const Stream = require("../models/Stream");

//get
router.get("/", async (req, res) => {
  try {
    let streams = await Stream.find();
    res.status(200).json(streams);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ARTICLE
router.get("/id=:id", async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id);
    res.status(200).json(stream);
  } catch (error) {
    res.status(500).json(error);
  }
});

//CREATE stream
router.post("/", async (req, res) => {
  const newStream = new Stream(req.body);
  try {
    const savedStream = await newStream.save();
    res.status(200).json(savedStream);
  } catch (error) {
    res.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const stream = await Stream.findById(req.params.id);

    try {
      const updatedStream = await Stream.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedStream);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
