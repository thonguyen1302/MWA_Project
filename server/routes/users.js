'use strict';

module.exports = function(app) {
   var userHandlers = require('../controller/userController');

   app.route('/auth/register')
   	.post(userHandlers.register);

   app.route('/auth/sign_in')
   	.post(userHandlers.sign_in);
};