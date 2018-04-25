var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var employee = new Schema({
    name: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: ''
    }
  },{
      collection: 'employees'
  });

module.exports = mongoose.model('employee', employee);

