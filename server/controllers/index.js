var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // req => model => correct formatted message object
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },
 
  
  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
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
