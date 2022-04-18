const mongoose = require("mongoose");

const StreamSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Stream", StreamSchema);
