var employee = require('../models/employee');
function getEmployees(res) {
    
    employee.find(function (err, employees) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
       
        //console.log(employees);
        if (err) {
            res.send(err);
        }
        res.json(employees); // return all employees in JSON format
    });
}

module.exports = function (app) {
    app.get('/api/employees', function (req, res, next) {
        getEmployees(res);
    });

    app.post('/api/employees', function (req, res) {
        employee.create({
            name: req.body.name,
            description: req.body.description
        }, function (err, todo) {
            if (err) res.send(err);
        });
    });
};