var express = require('express');
var router = express.Router();

var department = require('../models/department');

function getDepartments(res) {
    department.find({ 'status': 1 }, function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    }).sort({ 'createdDate': -1 });
}

router.route('/').get(function (req, res, next) {
    getDepartments(res);
});

router.route('/').post(function (req, res) {
    department.create({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        createdDate: req.body.createdDate
    }, function (err, todo) {
        if (err)
            res.send(err);
        else {
            //res.send("success");
            getDepartments(res);
        }
        //getDepartments(res);
    });
});

router.route('/:id').put(function (req, res) {
    department.update({ _id: req.body._id }, req.body, function (err, data) {
        if (err)
            res.send(err);
        getDepartments(res);
       // res.send("da put");
    })
});

router.route('/:id').delete(function (req, res) {
    department.remove({
        _id: req.params.id
    }, function (err, data) {
        if (err)
            res.send(err);
        getDepartments(res);
       // res.send("da delete");
    });
});

module.exports = router;