//Require Mongoose
var mongoose = require('mongoose');
//Định nghĩa một schema
var Schema = mongoose.Schema;

var OrderDetailSchema = new Schema({
  order: {
    type: Schema.ObjectId, 
    ref: 'Order', 
    required: true
  },
  book: {
    type: Schema.ObjectId, 
    ref: 'Book', 
    required: true
  },
  priceEach: {
    type: Number, 
    required: true
  },
  quality: {
    type: Number, 
    required: true
  },
});

const model = mongoose.model('OrderDetail', OrderDetailSchema)

module.exports = model;