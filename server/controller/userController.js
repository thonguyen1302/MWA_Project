// var express = require('express');
// var router = express.Router();

// var ObjectID = require('mongodb').ObjectID;

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'companyResource';
// const collection_name = "user";

// /* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

// router.get('/login', function (req, res, next) {
//   //res.send('login page');
//   MongoClient.connect(url, function (err, client) {
//     if (err) throw err;
//     const db = client.db(dbName);
//     db.collection(collection_name).findOne({ 'email': req.body.email }, function (err, userData) {
//       if (err) throw err;
//       if (!userData) {
//         res.status(401).json({message: 'Authentication failed. User not found.'});
//       } else if(userData) {
//         //if 
//       }
//     });
//   });
// });

'use strict';

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = mongoose.model('User');

exports.register = function (req, res) {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.sign_in = function (req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (!user.comparePassword(req.body.password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
      }
    }
  });
};

exports.loginRequired = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
};