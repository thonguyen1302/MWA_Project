const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config/database'),
      cors = require('cors'),
      jsonwebtoken = require("jsonwebtoken"),
      departmentRoutes = require('./routes/department'),
      employeeRoutes = require('./routes/employee');

      var logger = require("morgan");

mongoose.Promise = global.Promise;
mongoose.connect(config.localUrl).then(
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

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;