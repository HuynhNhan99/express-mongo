//Require Mongoose
var mongoose = require('mongoose');
//Định nghĩa một schema
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookName: {
      type: String, 
      required: true
    },
    price: {
      type: Number, 
      required: true
    },
    describe: {
      type: String, 
      required: true
    },
    image: {
      type: String, 
      required: true
    },
    author: {
      type: Schema.ObjectId, 
      ref: 'Author', 
    },
    paperback : {
      type: Number, 
      required: true
    }
});

const model = mongoose.model('Book', BookSchema);

module.exports = model;