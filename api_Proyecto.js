const cassandra = require('cassandra-driver');
const clienteCass = new cassandra.Client({contactPoints:['127.0.0.1'], keyspace: 'nfl_db'});
const {MongoClient} = reqiure ('mongodb');
const clienteDB = new MongoClient('mongodb://localhost:27017');
const db = client.db('');
const collection = db.collection('');
const dgrpah = require ('dgraph-js');
const clientStub = new dgrpah.DgrpahClientStub('localhost:9080');
const clienteDG = new dgrpah.DgraphClient(clientStub);
