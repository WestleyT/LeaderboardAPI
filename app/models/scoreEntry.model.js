const sql = require("./db.js");

const Entry = function(entry) {
    this.playername = entry.playername;
    this.scoretime = entry.scoretime;
    this.score = entry.score;
};

Entry.create = (newEntry, result) => {
    sql.query("INSERT INTO leaderboard SET ?", newEntry, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        result(null, {id : res.insertId, ...newEntry});
    });
};

Entry.getAll = result => {
    sql.query("SELECT * FROM leaderboard", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Entry.getScoreDec = result => {
    sql.query("SELECT * FROM leaderboard ORDER BY score DESC LIMIT 15", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    })
}

module.exports = Entry;