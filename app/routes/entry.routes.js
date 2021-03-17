module.exports = app => {
    const entries = require('../controllers/entry.controller.js');

    app.post("/entry", entries.create);

    app.get("/entry", entries.findAll);

    app.get("/ranked", entries.getByScoreDec);
}