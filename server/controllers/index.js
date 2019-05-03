var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // req => model => correct formatted message object
      // receive information from the models.messages.get
      // 
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (req.body.message === undefined ) {
        res.status(404).end();
      }
      console.log('_*_*_*_*_*_*_**_*_*_*_*');
      console.log(req.body);
      console.log('_*_*_*_*_*_*_**_*_*_*_*');
      models.messages.post(req.body, (err, response) => {
        if (err) {
          console.log(err);
          res.sendStatus(404);
        }
        res.sendStatus(201);
      });
     
    } // a function which handles posting a message to the database
    //schema to auto increment. repeat pattern on al controllers; 
  },
  
  users: {
    // Ditto as above
    get: function (req, res) {},
 
    post: function (req, res) {
      if (req.body.username === undefined) {
        res.sendStatus(404);
      }
      console.log('* * * * * * * * * * * * * * * ');
      console.log(req.body);
      console.log('* * * * * * * * * * * * * * * ');
      models.users.post(req.body);
      res.sendStatus(201);
    } 
  }
};

// method: 'POST',
// uri: 'http://127.0.0.1:3000/classes/users',
// json: { username: 'Valjean' }


// method: 'POST',
// uri: 'http://127.0.0.1:3000/classes/messages',
// json: {
//   username: 'Valjean',
//   message: 'In mercy\'s name, three days is all I need.',
//   roomname: 'Hello'
