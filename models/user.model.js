//Require Mongoose
var mongoose = require('mongoose');
//Định nghĩa một schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const model = mongoose.model('User', UserSchema);

module.exports = model;