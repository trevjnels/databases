var db = require('../db');



module.exports = {
  messages: {
    get: function (messages) {
      db.query('SELECT * FROM messages', (err, results, fields){
        

      })
    }, // a function which produces all the messages
    post: function (message) {


    } // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function (users) {


    },
    post: function (user) {


    }
  }
};