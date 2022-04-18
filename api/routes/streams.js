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

module.exports = router;
