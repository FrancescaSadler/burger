// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection
  ({"username": "ezkemfq6xbgai1mi",
  "password": "a87jjubriz2i1kvx",
  "database": "ggb36ed9hf1i6tfj",
  "host": "edo4plet5mhv93s3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  "port": 3306,
  "dialect": "mysql"});

}else{
  connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'root',
    database: 'burgers_db'
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
