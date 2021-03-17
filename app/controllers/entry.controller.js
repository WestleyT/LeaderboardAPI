const Entry = require("../models/scoreEntry.model.js");

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    const entry = new Entry({
        playername : req.body.playername,
        scoretime : req.body.scoretime,
        score : req.body.score
    });

    Entry.create(entry, (err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || "An error occured while creating a score entry"
            });
        } else {
            res.send(data);
        }
    })
};

exports.findAll = (req, res) => {
    Entry.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || "Error retrieving scores"
            });
        } else {
            res.send(data);
        }
    })
};

exports.getByScoreDec = (req, res) => {
    Entry.getScoreDec((err, data) => {
        if (err) {
            res.status(500).send({
                message : err.message || "Error retrieving scores"
            });
        } else {
            res.send(data);
        }
    })
}