var express = require('express');
var router = express.Router();
var user = require('../models/user');
function getEmployees(res) {
    user.find({ 'role':'employee' },function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
}

router.route('/').get(function (req, res, next) {
    getEmployees(res);
});

router.route('/').post(function (req, res) {getEmployees
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