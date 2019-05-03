var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  database: 'chat',
  user: 'root',
  password: ''
});

connection.connect(function(err) {
  if (err) {
    console.log('error connection: ' + err.stack);
  }
});

module.exports = connection;








var tablename = 'messages';

// /* Empty the db table before each test so that multiple tests
//  * (or repeated runs of the tests) won't screw each other up: */
// dbConnection.query('truncate ' + tablename, done);

// afterEach(function() { // Prehaps do not need to do this thing at all
//   dbConnection.end();
// });