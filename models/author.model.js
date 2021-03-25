//Require Mongoose
var mongoose = require('mongoose');
//Định nghĩa một schema
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
});

const model = mongoose.model('Author', AuthorSchema)
module.exports = model;