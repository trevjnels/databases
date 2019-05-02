var db = require('../db');



module.exports = {
  messages: {
    get: function (messages) {
      // db.query('SELECT * FROM messages', (err, results, fields) => {
      //   if (err) {
      //   //    console.log(err);
      //   // }
      //   // console.log('* * * * * * * * * * * * * * * ')
      //   // console.log(results)
      //   // console.log('* * * * * * * * * * * * * * * ')
        
      // });
    }, // a function which produces all the messages
    post: function (message) {
      

    } // a function which can be used to insert a message into the database
  },
  users: {
    // Ditto as above.
    get: function (users) {
      //  db.query('SELECT * FROM messages', (err, results, fields) => 


    },
    post: function (user) {
      db.query(`INSERT INTO users SET  id=${id}, username='${user}`, (err, results, fields) => {
        console.log('****************');
        console.log(results)
        console.log('****************');

      });
      
      

    
    }
  }
};


