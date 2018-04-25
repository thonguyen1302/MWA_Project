const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config'),
      cors = require('cors'),
      jsonwebtoken = require("jsonwebtoken"),
      departmentRoutes = require('./routes/department'),
      customerRoutes = require('./routes/customer'),
      employeeRoutes = require('./routes/employee');

      var logger = require("morgan");

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 6060;

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    
    next();
  }
});

app.use('/api/departments', departmentRoutes);
app.use('/api/employees', employeeRoutes);
app.use('api/customers', customerRoutes);

//////////////////
var todoList = require('./controller/todoListController'),
	userHandlers = require('./controller/userController');
app.route('/tasks')
.get(userHandlers.loginRequired, todoList.list_all_tasks);

app.route('/api/register')
		.post(userHandlers.register);

	app.route('/api/sign_in')
    .post(userHandlers.sign_in);
///////////////////////////

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;