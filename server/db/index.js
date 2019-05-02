var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host: 'chat',
  user: 'root'
})

connection.connect(function(err){
  if (err) {
    console.log('error connectiong: ' + err.stack);
     return; 
  }
  console.log('connected as id ' + connection.threadId);
});



// dbConnection = mysql.createConnection({
//   user: 'student',
//   password: 'student',
//   database: 'chat'
// });
// dbConnection.connect();


// var tablename = 'messages';

// /* Empty the db table before each test so that multiple tests
//  * (or repeated runs of the tests) won't screw each other up: */
// dbConnection.query('truncate ' + tablename, done);

// afterEach(function() { // Prehaps do not need to do this thing at all
//   dbConnection.end();
// });