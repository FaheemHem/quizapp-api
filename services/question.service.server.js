module.exports = app => {
  const questionModel = require('../models/quizzes/question.model.server')

  createQuestion = (req, res) =>
    questionModel
      .createQuestion(req.body)
      .then(
        question => res.json(question),
        error => res.send(error)
      )
    findAllQuestions = (req, res) =>
    questionModel.findAllQuestions()
        .then(users => {
          res.send(users);
        });

  app.post('/api/question', createQuestion)
  app.get('/api/question', findAllQuestions)
}