var express = require('express');
var router = express.Router();

var ObjectID = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'companyResource';
const collection_name = "user";

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

router.get('/login', function (req, res, next) {
  //res.send('login page');
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    const db = client.db(dbName);
    db.collection(collection_name).findOne({ 'email': req.body.email }, function (err, userData) {
      if (err) throw err;
      if (!userData) {
        res.status(401).json({message: 'Authentication failed. User not found.'});
      } else if(userData) {
        //if 
      }
    });
  });
});