const assert = require('assert');
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient
const connectionURL = 'mongodb://localhost:27017'
const dbName = 'testDB'
const userCollection = 'users'
const matchCollection = 'matches'

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

// CREATE USERS
app.route('/api/users').post((req, res) => {
  MongoClient.connect(connectionURL, function(err, client) {
	assert.equal(null, err);
	// Connect to mongodb service
	var db = client.db(dbName);
	console.log('Connected to database server : ' + db.databaseName)
	
	var reqName = req.body.name
	var reqMmr = req.body.mmr
	
	var userDocument = {name : reqName, mmr : reqMmr}
	db.collection(userCollection).insertOne(u, function(err, result) {
    res.status(201).send(req.body)
    client.close()
	})
  })
})

// READ ALL USERS
app.route('/api/users').get((req, res) => {
  MongoClient.connect(connectionURL, function(err, client) {
	assert.equal(null, err);
	// Connect to mongodb service
	var db = client.db(dbName);
	console.log('Connected to database server : ' + db.databaseName)
	
	findDocuments(db, userCollection, function(docs) {
	  res.send(docs)
	  client.close()
	})
  })
})

// READ USERS
app.route('/api/users/:name').get((req, res) => {
  const requestedGameName = req.params['name']
  res.send({ name: requestedGameName })
})

// UPDATE USERS
app.route('/api/users/:name').put((req, res) => {
  res.send(200, req.body)
})

// DELETE USERS
app.route('/api/users/:name').delete((req, res) => {
  res.sendStatus(204)
})


// CREATE MATCH
app.route('/api/matches').post((req, res) => {
  MongoClient.connect(connectionURL, function(err, client) {
	assert.equal(null, err);
	// Connect to mongodb service
	var db = client.db(dbName);
	console.log('Connected to database server : ' + db.databaseName)
	
	var reqMatchId = req.body.matchId
	var reqGameType = req.body.gameType
	var reqGameMode = req.body.gameMode
	var reqTeamOne = req.body.teamOne
	var reqTeamTwo = req.body.teamTwo
	var reqWinner = req.body.winner
	
	var matchDocument = 
	{matchId : reqMatchId,
	gameType : reqGameType,
	gameMode : reqGameMode,
	teamOne : reqTeamOne,
	teamTwo : reqTeamTwo,
	winner: reqWinner}
	db.collection(matchCollection).insertOne(matchDocument, function(err, result) {
      res.status(201).send(req.body)
      client.close()
	})
  })
})

// READ ALL MATCHES
app.route('/api/matches').get((req, res) => {
  MongoClient.connect(connectionURL, function(err, client) {
	assert.equal(null, err);
	// Connect to mongodb service
	var db = client.db(dbName);
	console.log('Connected to database server : ' + db.databaseName)
	
	findDocuments(db, matchCollection, function(docs) {
	  res.send(docs)
	  client.close()
	})
  })
})

// READ MATCHES
app.route('/api/matches/:name').get((req, res) => {
  const requestedGameName = req.params['name']
  res.send({ name: requestedGameName })
})

// UPDATE MATCHES
app.route('/api/matches/:name').put((req, res) => {
  res.send(200, req.body)
})

// DELETE MATCHES
app.route('/api/matches/:name').delete((req, res) => {
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
const findDocuments = function(db, collectionName, callback) {
  // Get the documents collection
  const collection = db.collection(collectionName);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  })
}

const dropAll = function(db, callback) {
  var collectionUsers = db.collection(userCollection)
  var collectionMatches = db.collection(matchCollection)
  collectionUsers.remove({})
  collectionMatches.remove({})
}

// MongoClient.connect(connectionURL, function(err, client) {
  // if (err) throw err;
  // var db = client.db(dbName);
  // dropAll(db)
  // db.createCollection(userCollection, function(err, res) {
    // if (err) throw err;
    // console.log("Users collection created!");
    // client.close();
  // })
  // db.createCollection(matchCollection, function(err, res) {
    // if (err) throw err;
    // console.log("Matches collection created!");
    // client.close();
  // })
// })