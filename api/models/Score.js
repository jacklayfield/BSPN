const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema(
  {
    sport: {
      type: String,
      required: true,
    },
    team1: {
      type: String,
      default: "Radford HS",
    },
    team2: {
      type: String,
      required: true,
    },
    score1: {
      type: String,
      required: false,
    },
    score2: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Score", ScoreSchema);
