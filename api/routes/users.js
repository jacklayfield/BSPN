const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Article = require("../models/Article");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("Unauthorized attempt to update an account");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Article.deleteMany({ author: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(500).json("User not found");
    }
  } else {
    res.status(401).json("Unauthorized attempt to delete an account");
  }
});

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json("User not found");
  }
});

module.exports = router;
