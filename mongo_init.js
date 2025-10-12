// Switch to the application database
db = db.getSiblingDB("mongo");

// Create an application user with read/write access
db.createUser({
  user: "mongouser",
  pwd: "mongopassword",
  roles: [{ role: "readWrite", db: "mongo" }],
});

// Optional: create a collection and insert a sample document
db.createCollection("example");
db.example.insertOne({ status: "initialized" });
