const MongoClient = require('mongodb').MongoClient;
const { MONGODB_DATABASE_CONFIGURATION } = require('../configuration/configuration');

const client = new MongoClient(MONGODB_DATABASE_CONFIGURATION.URI, { useNewUrlParser: true });

module.exports = client;