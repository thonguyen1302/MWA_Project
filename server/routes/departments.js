var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'companyResource';

router.get('/', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        const db = client.db(dbName);
  
        db.collection(collection_name).find({ role: 'Department' }).toArray(function (err, docs) {
            if (err) throw err;
            console.log(docs);
            res.send(docs);
            client.close();
        });
    });
});

module.exports = router;