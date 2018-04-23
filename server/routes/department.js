
var department = require('../models/department');
function getDepartments(res) {

    department.find(function (err, todos) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
        //console.log(todos);
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
}

module.exports = function (app) {
    app.get('/api/departments', function (req, res, next) {
        getDepartments(res);
    });

    app.post('/api/departments', function (req, res) {
        department.create({
            name: req.body.name,
            description: req.body.description
        }, function (err, todo) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            getDepartments(res);
        });
    });
};