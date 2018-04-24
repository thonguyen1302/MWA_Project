var express = require('express');
var router = express.Router();

var department = require('../models/department');

function getDepartments(res) {
    department.find(function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
}

router.route('/').get(function (req, res, next) {
    getDepartments(res);
});

router.route('/').post(function (req, res) {
    department.create({
        name: req.body.name,
        description: req.body.description
    }, function (err, todo) {
        if (err)
            res.send(err);
        getDepartments(res);
    });
});


router.route('/').put(function (req, res) {
    department.update({ _id: req.param.id }, req.body, function (err, data) {
        if (err)
            res.send(err);
        getDepartments(res);
        res.send("da put");
    })
});

router.route('/').delete(function (req, res) {
    department.remove({
        _id: req.params.id
    }, function (err, data) {
        if (err)
            res.send(err);
        getDepartments(res);
        res.send("da delete");
    });
});

module.exports = router;