const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config/database'),
      cors = require('cors'),
      departmentRoutes = require('./routes/department');

mongoose.Promise = global.Promise;
mongoose.connect(config.localUrl).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 6060;

app.use('/api/departments', departmentRoutes);

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});

module.exports = app;