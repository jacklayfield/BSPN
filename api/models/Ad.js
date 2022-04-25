const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Ad", AdSchema);
