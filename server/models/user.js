'use strict';
var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String,
    trim: true
  },
  lastname:{
    type: String
  },
  role: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    //unique: true,
    //lowercase: true,
    trim: true
    //required: true
  }, 
  phone: {
    type: String
  },
  password: {
    type: String,
    default: ''
  },
  hash_password: {
    type: String
    //required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
}, {
    collection: 'users'
  });

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password);
};

/// mongoose.model('user', UserSchema);
module.exports = mongoose.model('user', UserSchema);
