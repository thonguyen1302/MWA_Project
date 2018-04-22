var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const taskDB = 'companyResource';
const collection_name = "user";

// Tan Tho Nguyen - ID 986205
/* GET employees listing. */
router.get('/', function (req, res, next) {
  MongoClient.connect(url, function (err, client) {
      if (err) throw err;
      const db = client.db(taskDB);

      db.collection(collection_name).find({ role: 'Employee' }).toArray(function (err, docs) {
          if (err) throw err;
          console.log(docs);
          res.send(docs);
          // res.render('tasks', {tasks: docs});
          client.close();
      });
  });
});



// Tan Tho Nguyen - ID 986205
/* GET employe detail. */
router.get('/:emp_id', function (req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const db = client.db(taskDB);

        db.collection(collection_name).findOne({ _id: ObjectID(req.params.emp_id) }, (err, result) => {
            if (err) throw err;

            res.json(result);
            client.close();
        });
    });
});


// Tan Tho Nguyen - ID 986205
/* UPDATE employe detail. */
router.put('/:emp_id', function (req, res, next) {
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    const db = client.db(taskDB);
    
    db.collection(collection_name).findAndModify({ _id: ObjectID(req.params.emp_id) }, {}, 
      {
          $set: { 
              password:	res.body.params.emp_id,
              email: res.body.params.email,
              firstname: res.body.params.firstname,
              lastname: res.body.params.lastname,
              role: res.body.params.role,
              customer_ids: res.body.params.customer_ids
          } 
      }, (err, result) => {
        if (err) throw err;
        console.log(`Success: ${JSON.stringify(result)}!`);
        res.json(result);
        client.close();
      });
  });
});




// Tan Tho Nguyen - ID 986205
/* CREATE employee. */
router.post('/', function (req, res, next) {
  MongoClient.connect(url, function (err, client) {
      if (err) throw err;
      const db = client.db(taskDB);

      db.collection(collection_name).insert(req.body, (err, docInserted) => {
          if (err) throw err;
          console.log(`Success: ${JSON.stringify(docInserted)}!`);
          res.json(docInserted);
          // res.render('/tasks');
          client.close();
      });

  });
});


module.exports = router;
