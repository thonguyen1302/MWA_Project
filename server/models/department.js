var mongoose = require('mongoose');

module.exports = mongoose.model('department', {
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
});