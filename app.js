const MongoClient = require("mongodb");
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "fruitsDB";

client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected succesfully to server");
  const db = client.db(dbName);
  client.close();
});
