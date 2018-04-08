var mysql = require('mysql');
var db = require('./demo_db_con');

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});