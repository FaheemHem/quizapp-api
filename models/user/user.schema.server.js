const mongoose = require('mongoose')
const Schema = mongoose.Schema;
module.exports = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  sections: [{
    type: Schema.Types.ObjectId,
    ref: 'SectionModel'}]
}, {collection: 'user'});
