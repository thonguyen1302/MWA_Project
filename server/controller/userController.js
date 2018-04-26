

var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  bcrypt = require('bcrypt'),
  User = require('../models/user')
  ;

exports.register = function (req, res) {
  
  var newUser = new User();
  newUser.firstname = req.body.firstname;
  newUser.lastname = req.body.lastname;
  newUser.role = req.body.role;
  newUser.email= req.body.email;
  newUser.phone = req.body.phone;
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      console.log("save");
      return res.status(400).send({
        message: err
      });
    } else {
      const role = req.query.role;
      user.hash_password = undefined;
      res.redirect('/api/employees?role='+role);
    }
  });
};

exports.sign_in = function (req, res) {
  console.log(req.body);
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
        return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs'), role:user.role, name: `${user.firstname} ${user.lastname}` });
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