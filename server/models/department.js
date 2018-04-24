var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var department = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'departments'
});
module.exports = mongoose.model('department', department);
