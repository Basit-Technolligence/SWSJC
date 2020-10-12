
var admin = require("firebase-admin");

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://school-database-4b9a1.firebaseio.com"
});

const db = admin.firestore();
module.exports = db;