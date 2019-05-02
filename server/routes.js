var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);
// method: 'POST',
// uri: 'http://127.0.0.1:3000/classes/messages',
// json: {
//   username: 'Valjean',
//   message: 'In mercy\'s name, three days is all I need.',
//   roomname: 'Hello'

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);
// method: 'POST',
// uri: 'http://127.0.0.1:3000/classes/users',
// json: { username: 'Valjean' }


module.exports = router;

//VIEW