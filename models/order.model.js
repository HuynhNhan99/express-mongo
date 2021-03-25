//Require Mongoose
var mongoose = require('mongoose');
//Định nghĩa một schema
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  user: {
    type: Schema.ObjectId, 
    ref: 'User', 
    required: true
  },
  totalPrice: {
    type: Number, 
    required: true
  },
  orderDate: {
    type: Date, 
    required: true
  },
  status: {
    type: String, 
    required: true, 
    enum: ['Đã xác nhận', 'Đang giao', 'Đã giao', 'Đã hủy'], 
    default: 'chờ xác nhận'
  },

});

const model = mongoose.model('Order', OrderSchema)

module.exports = model;