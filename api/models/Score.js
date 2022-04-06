const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema(
  {
    sport: {
        type: String,
        required: true,
    },
    team1: {
      type: String,
      default: "Radford HS"
    },
    team2: {
      type: String,
      required: true,
    },
    score1: {
      type: String,
      required: true,
    },
    score2: {
      type: String,
      required: true,
    },
    date: {
        type: String,
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
