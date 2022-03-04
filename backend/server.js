const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bspnRoutes = express.Router();
const PORT = 4000;

let Score = require('./bspn.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/bspn', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database successfully connected");
})

bspnRoutes.route('/').get(function(req, res) {
    Score.find(function(err, scores) {
        if (err) {
            console.log(err);
        } else {
            res.json(scores);
        }
    });
});

bspnRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    Score.findById(id, function(err, score) {
            res.json(score);
    })
});

bspnRoutes.route('/add').post(function(req, res) {
    let score = new Score(req.body);
    score.save().then(score => {
            res.status(200).json({'score': 'score successfully added'});
        })
        .catch(err => {
            res.status(400).send('adding score failed');
        });
});



app.use('/bspn', bspnRoutes);

app.listen(PORT, function() {
    console.log("Server successfully started, running on Port: " + PORT);
});