//THIS IS THE SERVER

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bspnRoutes = express.Router();
const PORT = 4000;
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

let Score = require("./bspn.model");

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb://127.0.0.1:27017/bspn", { useNewUrlParser: true });
// const connection = mongoose.connection;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

bspnRoutes.route("/").get(function (req, res) {
  Score.find(function (err, scores) {
    if (err) {
      console.log(err);
    } else {
      res.json(scores);
    }
  });
});

bspnRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Score.findById(id, function (err, score) {
    res.json(score);
  });
});

bspnRoutes.route("/add").post(function (req, res) {
  let score = new Score(req.body);
  score
    .save()
    .then((score) => {
      res.status(200).json({ score: "score successfully added" });
    })
    .catch((err) => {
      res.status(400).send("adding score failed");
    });
});

// app.use("/bspn", bspnRoutes);

app.listen(PORT, () => {
  console.log("Server successfully started, running on Port: " + PORT);
});
