var db = require('../db');



module.exports = {
  messages: {
    get: function (messages) {

      // });
    }, // a function which produces all the messages
    post: function (message, id = -1) {
      id = id + 1;
      var { username, message, roomname } = message;
      console.log('username', username);
      
      console.log('message)', message);
      
      console.log('roomname', roomname);
      
      var content = message;
      db.query(`INSERT INTO messages (id, content, username, roomname) VALUES ("${id}", "${content}", "${username}", "${roomname}" );`, (err, results, fields) => {
        if (err) {
          console.log(err);
        }
        console.log('RECEIVED MESSAGE POST IN MoDELS');
        return results;
       
      });
    }

    // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function (users) {
      //  db.query('SELECT * FROM messages', (err, results, fields) => 


    },
    post: function (user, id = -1) {
      console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ', user);
      var { username } = user;
      id = id + 1;
      db.query(`INSERT INTO users (id, username, roomname) values('${id}', '${username}', 'newYork' );`, (err, results, fields) => {
        return results;
      
      });
    }
  }
};


