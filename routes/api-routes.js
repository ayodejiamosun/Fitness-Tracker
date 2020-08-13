var db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", function(req, res) {
    db.Workout.findAll({}).then(function(workout) {
      res.json(workout);
    });
  });
}