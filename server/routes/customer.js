var express = require('express');
var router = express.Router();

var user = require('../models/user');

function getModels(res) {
    user.find({ 'role': 'customer' }, function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    }).sort({ 'createdDate': -1 });
}

router.route('/').get(function (req, res, next) {
    console.log("vao customer");
    getModels(res);
});

router.route('/').post(function (req, res) {
    
    user.create({
        name: req.body.name,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
        email: req.body.email,
        phone: req.body.phone,
    }, function (err, todo) {
        if (err)
            res.send(err);
        getModels(res);
    });
});


router.route('/:id').put(function (req, res) {
    user.update({ _id: req.params.id }, req.body, function (err, data) {
        if (err)
            res.send(err);
        getModels(res);
    })
});

router.route('/:id').delete(function (req, res) {
    console.log(req.params.id);
    user.remove({
        _id: req.params.id
    }, function (err, data) {
        if (err)
            res.send(err);
        getModels(res);

    });
});

module.exports = router;