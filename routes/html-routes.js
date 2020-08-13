var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Route to Exercise page
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // Route to stats page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });

  };