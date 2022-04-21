const mongoose = require("mongoose");

const RosterSchema = new mongoose.Schema(
  {
    sport: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Roster", RosterSchema);
