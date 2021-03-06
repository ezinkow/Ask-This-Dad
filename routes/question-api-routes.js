// Requiring our models
const { Question } = require("../models");


module.exports = function (app) {

    app.get("/api/questions", function (req, res) {
        Question.findAll({})
            .then(function (dbQuestion) {
                res.json(dbQuestion)
            })
    })

    app.post("/api/questions", function (req, res) {
        Question.create({
            name: req.body.name,
            category: req.body.category,
            question: req.body.question
        })
            .then(function (dbQuestion) {
                res.json(dbQuestion)
            })
    })

    app.get('/api/questions/:id', function (req, res) {
        Question.findAll({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbQuestion) {
                res.json(dbQuestion)
            })
    })

    app.delete("/api/questions/:id", function(req, res) {
        console.log("Question ID:");
        console.log(req.params.id);
        Question.destroy({
          where: {
            id: req.params.id
          }
        }).then(function() {
          res.end();
        });
      });

}