const assert = require('assert');
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient
const connectionURL = 'mongodb://localhost:27017'
const dbName = 'testDB'
const userCollection = 'users'

var corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Start the server
app.listen(8000, () => {
  console.log('Server started!')
})
app.use(bodyParser.json())

// CREATE
app.route('/api/users').post((req, res) => {
  MongoClient.connect(connectionURL, function(err, client) {
	assert.equal(null, err);
	// Connect to mongodb service
	var db = client.db(dbName);
	console.log('Connected to database server : ' + db.databaseName)
  var n = req.body.name
  var m = req.body.mmr
  var u = {name : n, mmr : m}
	db.collection('users').insertOne(u, function(err, result) {
    console.log(n)
    console.log(m)
    console.log('Inserted')
    res.send(201, req.body)
    client.close()
  })
  })
})

// READ ALL
app.route('/api/users').get((req, res) => {
  MongoClient.connect(connectionURL, function(err, client) {
	assert.equal(null, err);
	// Connect to mongodb service
	var db = client.db(dbName);
	console.log('Connected to database server : ' + db.databaseName)
	findDocuments(db, function(docs) {
	  res.send(docs)
	  client.close()
	})
  })
})

// READ
app.route('/api/users/:name').get((req, res) => {
  const requestedGameName = req.params['name']
  res.send({ name: requestedGameName })
})

// UPDATE
app.route('/api/users/:name').put((req, res) => {
  res.send(200, req.body)
})

// DELETE
app.route('/api/users/:name').delete((req, res) => {
  res.sendStatus(204)
})

// Insert things into this collection
const insertDocuments = function(db, collectionName, callback) {
  // Get the documents collection
  const collection = db.collection(collectionName);
  // Insert some documents
  collection.insertMany(
  [
	{name : 'Sam', mmr : 1200}, {name : 'Asher', mmr : 1300}, {name : 'Bryan', mmr : 800}
  ], 
  function(err, result) {
	assert.equal(err, null);
	// assert.equal(3, result.result.n);
	assert.equal(3, result.ops.length);
	console.log("Inserted 3 documents into the collection");
	callback(result);
  });
}

// Find things in this collection
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection(userCollection);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

const dropAll = function(db, callback) {
  const collection = db.collection('users')
  collection.remove({})
}

// MongoClient.connect(connectionURL, function(err, client) {
  // if (err) throw err;
  // var db = client.db(dbName);
// });