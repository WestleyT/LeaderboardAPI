const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.json({message : "Welcome to the leaderboard app"});
});

require("./app/routes/entry.routes.js")(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});