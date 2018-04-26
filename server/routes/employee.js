var express = require('express');
var router = express.Router();
var user = require('../models/user');
function getEmployees(res, role) {
    var condition = { 'role': 'employee' };
    console.log(condition);
    if (role && role === 'admin') {
        user.find({ 'role': { $ne: 'customer' } }, function (err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos); // return all todos in JSON format
        }).sort({ 'createdDate': -1 });
    } else {
        user.find(condition, function (err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos); // return all todos in JSON format
        }).sort({ 'createdDate': -1 });
    }
}

router.route('/').get(function (req, res, next) {
    console.log(req.query.role);
    const role = req.query.role;
    getEmployees(res, role);
});

router.route('/').post(function (req, res) {
    getEmployees
    console.log(req.body);
    user.create({
        name: req.body.name,
    }, function (err, todo) {
        if (err)
            res.send(err);
        getEmployees(res);
    });
});

router.route('/:id').put(function (req, res) {
    user.update({ _id: req.params.id }, req.body, function (err, data) {
        if (err)
            res.send(err);
        getEmployees(res);
    })
});

router.route('/:id').delete(function (req, res) {
    user.remove({
        _id: req.params.id
    }, function (err, data) {
        if (err)
            res.send(err);
        getEmployees(res);
    });
});

module.exports = router;