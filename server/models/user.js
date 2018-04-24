'use strict';
var mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  fullName: {
    type: String,
    trim: true
    //required: true
  },
  email: {
    type: String,
    //unique: true,
    lowercase: true,
    trim: true
    //required: true
  },
  hash_password: {
    type: String
    //required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: ''
  }
}, {
    collection: 'users'
  });

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hash_password);
};

// mongoose.model('user', UserSchema);
module.exports = mongoose.model('user', UserSchema);
