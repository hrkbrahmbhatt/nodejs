var con = require('./demo_db_con');
  var sql = "CREATE TABLE demo (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });