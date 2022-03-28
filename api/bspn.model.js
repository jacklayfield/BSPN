const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Score = new Schema({
  team_1_score: {
    type: Number,
  },
  team_2_score: {
    type: Number,
  },
  team_1_name: {
    type: String,
  },
  team_2_name: {
    type: String,
  },
});

module.exports = mongoose.model("Score", Score);
