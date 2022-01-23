const mongoose = require('mongoose')
const Schema = mongoose.Schema;
module.exports = mongoose.Schema({
  title: {type: String},
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'QuestionModel'
  }]
}, {collection: 'quiz'});
